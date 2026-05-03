import { useState, useEffect, useRef } from 'react';

/**
 * Hook to animate a number counter
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @param {boolean} shouldStart - Whether to trigger the animation
 * @returns {number} Current counter value
 */
export const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (currentTime) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(end * easedProgress));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shouldStart, end, duration]);

  return count;
};
