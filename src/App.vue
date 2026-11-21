<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import StudioHero from "./components/StudioHero.vue";
import Marquee from "./components/Marquee.vue";
import AppShowcase from "./components/AppShowcase.vue";
import SiteFooter from "./components/SiteFooter.vue";

gsap.registerPlugin(ScrollTrigger);

const cleanup = [];

onMounted(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- custom cursor ---- */
  if (matchMedia("(hover: hover)").matches) {
    document.documentElement.classList.add("has-cursor");
  }
  const cur = document.getElementById("cursor");
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
  addEventListener("pointermove", onMove);
  let curRaf;
  const curLoop = () => {
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    if (cur) cur.style.transform = `translate(${cx - 7}px,${cy - 7}px)`;
    curRaf = requestAnimationFrame(curLoop);
  };
  curLoop();
  document.querySelectorAll("a,.store").forEach((el) => {
    el.addEventListener("pointerenter", () => cur && cur.classList.add("big"));
    el.addEventListener("pointerleave", () => cur && cur.classList.remove("big"));
  });

  /* ---- scattered hardware parts ---- */
  const stage = document.getElementById("stage");
  const BOLT = `<svg width="46" height="46" viewBox="0 0 46 46"><path d="M23 2l8 5 8 0 0 9 5 7-5 7 0 9-8 0-8 5-8-5-8 0 0-9-5-7 5-7 0-9 8 0z" fill="none" stroke="#121210" stroke-width="2.5"/><circle cx="23" cy="23" r="7" fill="none" stroke="#121210" stroke-width="2.5"/></svg>`;
  const SCREW = `<svg width="18" height="60" viewBox="0 0 18 60"><rect x="4" y="12" width="10" height="44" fill="#121210"/><path d="M9 56l5-8H4z" fill="#121210"/><circle cx="9" cy="8" r="8" fill="#121210"/><rect x="3" y="6" width="12" height="2.4" fill="#e4f1ee"/></svg>`;
  const NUT = `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M20 3l14 8v18l-14 8-14-8V11z" fill="#121210"/><circle cx="20" cy="20" r="8" fill="#e4f1ee"/></svg>`;
  const shapes = [BOLT, SCREW, NUT];
  const parts = [];
  const N = reduce ? 0 : 16;
  for (let i = 0; i < N; i++) {
    const d = document.createElement("div");
    d.className = "part";
    d.innerHTML = shapes[i % 3];
    d.dataset.depth = Math.random() * 0.6 + 0.2;
    stage.appendChild(d);
    parts.push(d);
  }

  /* Scatter parts evenly across the margin BANDS around the wordmark (top/bottom/
     left/right), weighted by area, re-checking against all text boxes. This spreads
     them instead of clumping failures into one gutter, at any viewport shape. */
  function placeParts() {
    const ocx = innerWidth / 2, ocy = innerHeight / 2;
    const m = 48, pad = 66;
    const avoid = ["#wordmark", ".hero-foot", ".scrollcue"].map((sel) => {
      const r = document.querySelector(sel).getBoundingClientRect();
      return { l: r.left - pad, r: r.right + pad, t: r.top - pad, b: r.bottom + pad };
    });
    const inAvoid = (x, y) => avoid.some((b) => x > b.l && x < b.r && y > b.t && y < b.b);
    const w = avoid[0]; // wordmark box
    const bands = [
      { l: m, r: innerWidth - m, t: m, b: Math.max(m, w.t) },                       // top
      { l: m, r: innerWidth - m, t: Math.min(innerHeight - m, w.b), b: innerHeight - m }, // bottom
      { l: m, r: Math.max(m, w.l), t: m, b: innerHeight - m },                      // left
      { l: Math.min(innerWidth - m, w.r), r: innerWidth - m, t: m, b: innerHeight - m }, // right
    ].filter((bd) => bd.r - bd.l > 24 && bd.b - bd.t > 24);
    const area = (bd) => (bd.r - bd.l) * (bd.b - bd.t);
    const total = bands.reduce((s, bd) => s + area(bd), 0) || 1;
    parts.forEach((p) => {
      let x = ocx, y = m, tries = 0, ok = false;
      while (tries < 50 && !ok) {
        let t = Math.random() * total, bd = bands[0];
        for (const b of bands) { t -= area(b); if (t <= 0) { bd = b; break; } }
        x = gsap.utils.random(bd.l, bd.r);
        y = gsap.utils.random(bd.t, bd.b);
        if (!inAvoid(x, y)) ok = true;
        tries++;
      }
      p._rx = x - ocx;
      p._ry = y - ocy;
    });
  }

  /* ---- smooth inertia scroll ---- */
  let lenis;
  if (!reduce) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    let lenisRaf;
    const raf = (t) => { lenis.raf(t); lenisRaf = requestAnimationFrame(raf); };
    lenisRaf = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    cleanup.push(() => { cancelAnimationFrame(lenisRaf); lenis.destroy(); });
  }

  cleanup.push(() => {
    cancelAnimationFrame(curRaf);
    removeEventListener("pointermove", onMove);
    ScrollTrigger.getAll().forEach((s) => s.kill());
  });

  if (reduce) {
    parts.forEach((p) => (p.style.opacity = 0));
    return;
  }

  /* run the choreography once fonts are ready so the wordmark measures correctly */
  const start = () => {
    placeParts();

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from("#wordmark .line span", { yPercent: 120, duration: 1, stagger: 0.1 })
      .fromTo(parts,
        { x: 0, y: 0, scale: 0, rotation: () => gsap.utils.random(-180, 180), opacity: 0 },
        {
          x: (i, el) => el._rx, y: (i, el) => el._ry,
          scale: 1, rotation: () => gsap.utils.random(-40, 40), opacity: 0.9,
          duration: 1.2, stagger: { each: 0.04, from: "random" }, ease: "power3.out",
        }, "-=.7");

    let rz;
    const onResize = () => {
      clearTimeout(rz);
      rz = setTimeout(() => {
        placeParts();
        parts.forEach((p) => gsap.set(p, { x: p._rx, y: p._ry }));
        ScrollTrigger.refresh();
      }, 200);
    };
    addEventListener("resize", onResize);
    cleanup.push(() => removeEventListener("resize", onResize));

    gsap.to(".scrollcue .bar", { scaleY: 0.3, repeat: -1, yoyo: true, duration: 0.9, ease: "power1.inOut" });

    gsap.to("#wordmark", {
      letterSpacing: ".06em", scale: 1.08, opacity: 0.15, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
    parts.forEach((p) => {
      const depth = parseFloat(p.dataset.depth);
      gsap.to(p, {
        yPercent: -120 * depth * 3, rotation: `+=${gsap.utils.random(-120, 120)}`, opacity: 0, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    });

    gsap.to("#track", { xPercent: -50, repeat: -1, duration: 18, ease: "none" });

    gsap.fromTo("#workDeco img", { opacity: 0.018 }, { opacity: 0.038, repeat: -1, yoyo: true, duration: 3.4, ease: "sine.inOut" });

    gsap.utils.toArray(".reveal > *").forEach((el) => {
      gsap.from(el, { yPercent: 120, duration: 1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 88%" } });
    });
    gsap.utils.toArray(".app .shot").forEach((el) => {
      gsap.from(el, { y: 80, autoAlpha: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      gsap.to(el, { yPercent: -12, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });

    ScrollTrigger.refresh();
  };

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
  else start();
});

onBeforeUnmount(() => cleanup.forEach((fn) => fn()));
</script>

<template>
  <div class="grain" aria-hidden="true"></div>
  <div class="cursor" id="cursor" aria-hidden="true"></div>
  <main>
    <StudioHero />
    <Marquee />
    <AppShowcase />
    <SiteFooter />
  </main>
</template>
