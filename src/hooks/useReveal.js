import { useEffect } from 'react';

export function useReveal(selector = '.reveal, .reveal-x-l, .reveal-x-r, .reveal-scale, .stat', deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
