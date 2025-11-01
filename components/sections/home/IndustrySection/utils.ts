export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const updatePositionFromClientX = (
  clientX: number,
  container: HTMLDivElement | null
): number | null => {
  if (!container) return null;
  const rect = container.getBoundingClientRect();
  const relativeX = clamp(clientX - rect.left, 0, rect.width);
  const percent = (relativeX / rect.width) * 100;
  return percent;
};

