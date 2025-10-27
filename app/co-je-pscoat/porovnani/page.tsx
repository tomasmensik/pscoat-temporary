
export default function Porovnani() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Porovnání izolací
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                PScoat versus klasická izolace – zjistěte rozdíly a benefity
                moderního řešení.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  PScoat vs klasická izolace
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#0180ae] pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Moderní nanotechnologie
                    </h3>
                    <p className="text-gray-700">
                      PScoat využívá pokročilé mikrosféry pro lepší izolační
                      vlastnosti než tradiční materiály.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#0180ae] pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Energetické úspory
                    </h3>
                    <p className="text-gray-700">
                      Výrazně vyšší úspora energií díky TSR &gt;92% v porovnání
                      s konvenčními izolacemi.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#0180ae] pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Dlouhá životnost
                    </h3>
                    <p className="text-gray-700">
                      Delší životnost a nižší náklady na údržbu oproti klasickým
                      řešením.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
