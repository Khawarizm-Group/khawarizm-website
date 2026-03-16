"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

type AnimationCallback<T extends HTMLElement> = (
  ctx: gsap.Context,
  container: T
) => void;

export function useGsap<T extends HTMLElement = HTMLElement>(
  callback: AnimationCallback<T>,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<T>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context((context) => {
      callback(context as gsap.Context, el);
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
