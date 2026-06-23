"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Wraps children in framer-motion's LazyMotion with domAnimation features only.
 * This reduces the framer-motion JS bundle from ~140 KiB to ~27 KiB by excluding
 * layout animations, 3D transforms, and other unused features.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
