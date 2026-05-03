import React, { useState, useEffect, useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

/**
 * Animated stat counter component
 * Animates numbers when the element comes into view
 */
const StatCounter = ({ value, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Extract numeric value and suffix (e.g., "500+" -> 500 and "+")
  const parseValue = (val) => {
    const match = val.match(/^(\d+)(.*)$/);
    return match ? { number: parseInt(match[1]), suffix: match[2] } : { number: 0, suffix: val };
  };

  const { number, suffix } = parseValue(value);
  const animatedCount = useCountUp(number, 2000, isVisible);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={elementRef}>
      <div className="stat-value">
        {animatedCount}
        {suffix}
      </div>
    </div>
  );
};

export default StatCounter;
