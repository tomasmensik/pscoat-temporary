import { useEffect, RefObject } from "react";
import { updatePositionFromClientX } from "./utils";

export const useSliderAnimation = (
  selectedIcon: number,
  isDragging: boolean,
  setSliderPosition: (position: number) => void
) => {
  useEffect(() => {
    // Don't animate if user is dragging
    if (isDragging) return;

    // Reset and start animation
    setSliderPosition(0);

    let animationId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const animateSlider = () => {
      const steps = [
        { target: 75, duration: 1500 },
        { target: 25, duration: 1500 },
        { target: 50, duration: 1500 },
      ];

      let stepIndex = 0;
      let startTime = Date.now();
      let startPos = 0;

      const animate = () => {
        // Stop if user starts dragging
        if (isDragging) {
          if (animationId) cancelAnimationFrame(animationId);
          return;
        }

        if (stepIndex >= steps.length) return;

        const now = Date.now();
        const elapsed = now - startTime;
        const step = steps[stepIndex];
        const progress = Math.min(elapsed / step.duration, 1);

        // Ease in-out cubic function for smooth animation
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const easedProgress = easeInOutCubic(progress);
        const currentPos = startPos + (step.target - startPos) * easedProgress;

        setSliderPosition(currentPos);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          startPos = step.target;
          stepIndex++;
          startTime = Date.now();
          if (stepIndex < steps.length) {
            animationId = requestAnimationFrame(animate);
          }
        }
      };

      // Start animation after a short delay
      timeoutId = setTimeout(() => {
        startTime = Date.now();
        animationId = requestAnimationFrame(animate);
      }, 300);
    };

    animateSlider();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [selectedIcon, isDragging, setSliderPosition]);
};

export const useDragHandlers = (
  isDragging: boolean,
  setIsDragging: (dragging: boolean) => void,
  sliderContainerRef: RefObject<HTMLDivElement>,
  setSliderPosition: (position: number) => void
) => {
  useEffect(() => {
    if (!isDragging) return;

    const handleUpdatePosition = (clientX: number) => {
      const percent = updatePositionFromClientX(clientX, sliderContainerRef.current);
      if (percent !== null) {
        setSliderPosition(percent);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleUpdatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleUpdatePosition(e.touches[0].clientX);
      }
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove as any);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, setIsDragging, sliderContainerRef, setSliderPosition]);
};

