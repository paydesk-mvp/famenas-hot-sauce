import logo from './assets/logo.PNG'
export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="w-full border-b border-[#222] bg-black/90 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Famena Logo"
    className="w-14 h-14 object-contain"
  />

  <div className="text-xl md:text-2xl font-black tracking-wide">
    FAMENA’S HOT SAUCE
  </div>
</div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Shop
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Our Story
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Reviews
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg font-semibold">
            Buy Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>

              <img
  src={logo}
  alt="Famena Logo"
  className="w-28 mb-6"
/>

              <p className="text-orange-400 text-lg mb-4 italic">
                Caribbean Heat. Winnipeg Made.
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
                FAMENA’S
                <br />
                HOT SAUCE
              </h1>

              <p className="text-gray-300 text-lg leading-8 max-w-xl mb-8">
                Crafted with Carolina Reaper, Scorpion, and
                Habanero peppers for unforgettable Caribbean
                flavour and serious heat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-lg font-bold">
                  BUY HOT SAUCE — $20
                </button>

                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-xl text-lg font-bold">
                  VISIT RESTAURANT
                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 bg-orange-500 blur-[120px] opacity-40 rounded-full"></div>

                <img
                  src="https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=1200&auto=format&fit=crop"
                  alt="Hot Sauce"
                  className="relative z-10 w-[280px] md:w-[420px] rounded-3xl border border-[#333]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="border-y border-[#222] bg-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-10">

          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-2">
              EXTREME HEAT
            </h3>

            <p className="text-gray-400">
              Carolina Reaper, Scorpion, and Habanero peppers.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-2">
              BOLD FLAVOUR
            </h3>

            <p className="text-gray-400">
              Caribbean spices with rich balanced heat.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-2">
              MADE IN WINNIPEG
            </h3>

            <p className="text-gray-400">
              Small batch handcrafted sauce inspired by Famena’s Famous Roti.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-bold text-xl mb-2">
              REAL RESTAURANT SAUCE
            </h3>

            <p className="text-gray-400">
              The same sauce customers ask for every day.
            </p>
          </div>

        </div>

      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Product"
              className="rounded-3xl border border-[#333]"
            />

          </div>

          <div>

            <p className="text-orange-500 uppercase tracking-widest mb-4">
              Signature Sauce
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              FROM RESTAURANT FAVOURITE
              <br />
              TO BOTTLED FIRE.
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-8">
              Originally served inside Famena’s Famous Roti,
              this legendary sauce became a customer obsession.
              Now available to take home.
            </p>

            <div className="text-3xl font-black text-orange-500 mb-6">
              $20 CAD
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-xl text-lg font-bold">
              ADD TO CART
            </button>

          </div>

        </div>

      </section>

      {/* RESTAURANT SECTION */}
      <section className="bg-black border-t border-[#222]">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-orange-500 uppercase tracking-widest mb-4">
                Visit Us
              </p>

              <h2 className="text-4xl md:text-5xl font-black mb-6">
                FAMENA’S
                <br />
                FAMOUS ROTI
              </h2>

              <div className="space-y-3 text-gray-300 text-lg">

                <p>295 Garry St.</p>
                <p>Winnipeg, Manitoba</p>
                <p>(204) 414-9040</p>

              </div>

              <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold">
                GET DIRECTIONS
              </button>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant"
                className="rounded-3xl border border-[#333]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#222] bg-[#050505]">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">

          <div>

<div className="flex items-center gap-4 mb-3">
  <img
    src={logo}
    alt="Famena Logo"
    className="w-16 h-16 object-contain"
  />

  <div className="text-2xl font-black text-orange-500">
    FAMENA’S HOT SAUCE
  </div>
</div>

            <p className="text-gray-500 max-w-md">
              Real flavour. Real heat. Real Winnipeg.
            </p>

          </div>

          <div className="text-gray-500">
            © 2026 Famena’s Hot Sauce
          </div>

        </div>

      </footer>

    </div>
  )
}