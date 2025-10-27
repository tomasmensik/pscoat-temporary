
export default function Prumysl() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Průmyslové aplikace
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                PScoat poskytuje spolehlivou izolaci pro průmyslová zařízení a
                technologické celky.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Průmyslové použití
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Izolace potrubí a nádrží</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Chladící a mrazící zařízení</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Hale a sklady</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Výrobní haly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Technické výhody
                </h2>
                <p className="text-gray-700">
                  PScoat je ideální volbou pro průmyslové prostředí díky své
                  odolnosti, dlouhé životnosti a významným energetickým úsporám.
                  Ochrana proti korozi a izolace teplot pomáhají prodloužit
                  životnost zařízení.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
