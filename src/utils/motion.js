/**
 * BRAND NEW DAY — Motion System Primitives (Phase 4.4)
 *
 * Categories:
 * 1. Section Reveal (textVariant, fadeIn): Short vertical movement (20-28px) & opacity transition.
 * 2. Stagger Container (staggerContainer): Coordinated child reveals without blocking interaction.
 * 3. Slide In (slideIn): Panel entrance transitions with cubic-bezier easing.
 * 4. Ambient / Pulse (ambientFloat): Subtle slow motion for atmospheric nodes.
 */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 22,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.55,
        delay: delay,
        ease: EASE_OUT_EXPO,
      },
    },
  };
};

export const fadeIn = (direction = "", type = "tween", delay = 0, duration = 0.55) => {
  return {
    hidden: {
      x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type === "spring" ? "tween" : type,
        delay: Math.min(delay, 0.45),
        duration: Math.min(duration, 0.65),
        ease: EASE_OUT_EXPO,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      scale: 0.94,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: EASE_OUT_EXPO,
      },
    },
  };
};

export const slideIn = (direction = "left", _type = "tween", delay = 0, duration = 0.6) => {
  return {
    hidden: {
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: EASE_OUT_EXPO,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};