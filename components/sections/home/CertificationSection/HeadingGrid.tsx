const HEADING_LINE_HEIGHT_EM = 1.3;
const HEADING_ROWS = 3;

interface HeadingGridProps {
  lines: string[];
}

export default function HeadingGrid({ lines }: HeadingGridProps) {
  // Keep natural reading order, but reserve 3 fixed line slots and push content down
  const rendered = lines.filter(Boolean);
  return (
    <div
      style={{ height: `${HEADING_LINE_HEIGHT_EM * HEADING_ROWS}em`, lineHeight: `${HEADING_LINE_HEIGHT_EM}em` }}
      className="flex flex-col justify-end"
    >
      {rendered.map((line, i) => (
        <div key={i} className="text-xl md:text-2xl text-slate-800">
          {line}
        </div>
      ))}
    </div>
  );
}

