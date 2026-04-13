export default function Home() {

  const screenshots = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
  ];

  return (
    <main>

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white py-24 text-center">

        <h1 className="text-5xl font-bold mb-6">
          રોજનીશી - દૈનિક નોંધપોથી
        </h1>

        <p className="text-xl mb-8">
          તમારી રોજનીશી હવે Digital માં!
        </p>

        <a
          href="https://play.google.com"
          target="_blank"
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Download App
        </a>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          App Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-xl p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3">Weekly Schedule</h3>
            <p>તમારો આખો અઠવાડિયાનો સમયપત્રક સરળતાથી બનાવો.</p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3">Generate Daily Log</h3>
            <p>એક ક્લિકમાં તમારી રોજનીશી જનરેટ કરો.</p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3">Special Days</h3>
            <p>વિશેષ દિવસ પસંદ કરી રોજનીશીમાં ઉમેરો.</p>
          </div>

        </div>

      </section>



      {/* SCREENSHOTS */}

      <section className="bg-gradient-to-r from-yellow-400 to-blue-500 py-20">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          App Screenshots
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 px-6">

          {screenshots.map((src, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-xl flex justify-center"
            >
              <img
                src={src}
                className="w-36 rounded-xl shadow-2xl hover:scale-105 transition"
                alt="App Screenshot"
              />
            </div>
          ))}

        </div>

      </section>



      {/* HOW IT WORKS */}

      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-10 text-center">
          એપ કેવી રીતે વાપરશો?
        </h2>

        <ul className="text-lg space-y-4">

          <li>🟢 રજીસ્ટર કરીને તમારું એકાઉન્ટ બનાવો.</li>
          <li>🟢 Schedule પેજમાં જઈને સમયપત્રક બનાવો.</li>
          <li>🟢 Generate પેજમાં જઈ રોજનીશી બનાવો.</li>
          <li>🟢 જરૂરી હોય તો વિશેષ દિવસ ઉમેરો.</li>

        </ul>

      </section>



      {/* DOWNLOAD */}

      <section className="bg-blue-600 text-white text-center py-20">

        <h2 className="text-4xl font-bold mb-6">
          Teacher Daily Book App
        </h2>

        <p className="mb-8">
          Teachers માટે બનાવેલી Smart Rojanishi App
        </p>

        <a
          href="https://play.google.com"
          target="_blank"
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Download on Play Store
        </a>

      </section>

    </main>
  );
}