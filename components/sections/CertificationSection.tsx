"use client";

const HEADING_LINE_HEIGHT_EM = 1.3;
const HEADING_ROWS = 3;

function HeadingGrid({ lines }: { lines: string[] }) {
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

export default function CertificationSection() {
  return (
    <section className="w-full bg-white min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <HeadingGrid lines={["Certifikace", "a ověřená kvalita", ""]} />
              </div>
              <img
                src="/home/certifikace/tuv-logo.png"
                alt="TÜV logo"
                className="object-contain"
                style={{ height: `${HEADING_LINE_HEIGHT_EM * HEADING_ROWS}em`, width: "auto" }} />
            </div>
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              PS Coat je vyvíjen a testován od roku 2013 a splňuje požadavky
              relevantních certifikací pro průmyslové a stavební aplikace. Výroba
              probíhá v certifikovaném závodě v Polsku nedaleko Krakova, kde je
              zajištěna kontrola kvality a dohled nad výrobním procesem.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <HeadingGrid
              lines={[
                "Švýcarský původ.",
                "Mezinárodní dostupnost.",
                "Lokální technická podpora.",
              ]}
            />
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              PS Coat vychází z vývoje společnosti založené ve Švýcarsku v roce 2007.
              Od té doby rozšířila své působení z Evropy do Severní a Jižní Ameriky i na
              Blízký východ. Materiál je dnes dostupný pro průmyslové, stavební i
              speciální projekty s lokální technickou podporou.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <HeadingGrid lines={["Nepřetržitý vývoj", "", ""]} />
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              PS Coat je stabilní a ověřené řešení, které dál rozvíjíme a
              přizpůsobujeme různým provozním podmínkám. Spolupracujeme s
              výzkumníky a odborníky na povrchové a průmyslové technologie, abychom
              materiál průběžně vylepšovali a rozšiřovali jeho možnosti použití v praxi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


