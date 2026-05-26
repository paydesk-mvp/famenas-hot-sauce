import { useState } from 'react'

import logo from './assets/logo.PNG'
import bottle from './assets/bottle.PNG'
import counterTop from './assets/counter_top.jpg'
import roti from './assets/roti.png'

const STRIPE_LINK = 'https://buy.stripe.com/bJefZg8lc1aE9jP2iq77O00'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToCheckout = () => {
    window.location.href = STRIPE_LINK
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden scroll-smooth">

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 border-t border-[#222] p-4">
        <button
          onClick={goToCheckout}
          className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-2xl text-lg font-black"
        >
          BUY HOT SAUCE — $20
        </button>
      </div>

      <nav className="w-full border-b border-[#1f1f1f] bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4 relative">

          <a href="#" onClick={closeMenu} className="flex items-center gap-3 md:gap-4">
            <img
              src={logo}
              alt="Famena Logo"
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />

            <div className="text-base sm:text-lg md:text-3xl font-black tracking-wide leading-tight">
              FAMENA’S HOT SAUCE
            </div>
          </a>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#shop" className="hover:text-orange-500 transition">Shop</a>
            <a href="#story" className="hover:text-orange-500 transition">Our Story</a>
            <a href="#reviews" className="hover:text-orange-500 transition">Reviews</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>

          <button
            onClick={goToCheckout}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-bold"
          >
            Buy Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-[#333] bg-[#111]"
            aria-label="Open mobile menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-[3px] bg-white rounded"></span>
              <span className="w-6 h-[3px] bg-white rounded"></span>
              <span className="w-6 h-[3px] bg-white rounded"></span>
            </div>
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-4 top-[78px] w-[260px] md:hidden bg-black border border-[#333] rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col text-base uppercase tracking-wide">
                <a href="#" onClick={closeMenu} className="px-6 py-4 border-b border-[#222] hover:bg-[#111] hover:text-orange-500">Home</a>
                <a href="#shop" onClick={closeMenu} className="px-6 py-4 border-b border-[#222] hover:bg-[#111] hover:text-orange-500">Shop</a>
                <a href="#story" onClick={closeMenu} className="px-6 py-4 border-b border-[#222] hover:bg-[#111] hover:text-orange-500">Our Story</a>
                <a href="#reviews" onClick={closeMenu} className="px-6 py-4 border-b border-[#222] hover:bg-[#111] hover:text-orange-500">Reviews</a>
                <a href="#contact" onClick={closeMenu} className="px-6 py-4 hover:bg-[#111] hover:text-orange-500">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#120500] to-black">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500 opacity-10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">

            <div>
              <img src={logo} alt="Famena Logo" className="w-32 md:w-48 mb-8" />

              <p className="text-orange-400 text-base md:text-lg mb-5 italic">
                Caribbean Heat. Winnipeg Made.
              </p>

              <h1 className="text-4xl md:text-7xl font-black leading-none mb-8">
                FAMENA’S
                <br />
                HOT SAUCE
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 max-w-xl mb-10">
                Crafted with Carolina Reaper, Scorpion,
                and Habanero peppers for unforgettable
                Caribbean flavour and serious heat.
              </p>

              <div className="hidden md:flex flex-col sm:flex-row gap-5">
                <button onClick={goToCheckout} className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl text-lg font-black">
                  BUY HOT SAUCE — $20
                </button>

                <a href="#contact" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-10 py-5 rounded-2xl text-lg font-black text-center">
                  VISIT RESTAURANT
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-[140px] opacity-30 rounded-full"></div>

                <img
                  src={bottle}
                  alt="Famena Bottle"
                  className="relative z-10 w-[260px] sm:w-[320px] md:w-[540px] object-contain drop-shadow-[0_0_70px_rgba(255,80,0,0.45)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-y border-[#1f1f1f] bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-4 md:px-6 py-12">
          <div>
            <h3 className="text-orange-500 font-black text-xl mb-3">EXTREME HEAT</h3>
            <p className="text-gray-400 leading-7">Carolina Reaper, Scorpion, and Habanero peppers.</p>
          </div>

          <div>
            <h3 className="text-orange-500 font-black text-xl mb-3">BOLD FLAVOUR</h3>
            <p className="text-gray-400 leading-7">Rich Caribbean flavour with balanced heat and spice.</p>
          </div>

          <div>
            <h3 className="text-orange-500 font-black text-xl mb-3">MADE IN WINNIPEG</h3>
            <p className="text-gray-400 leading-7">Handcrafted in small batches inspired by Famena’s Famous Roti.</p>
          </div>

          <div>
            <h3 className="text-orange-500 font-black text-xl mb-3">REAL RESTAURANT SAUCE</h3>
            <p className="text-gray-400 leading-7">The same sauce customers ask for every single day.</p>
          </div>
        </div>
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={roti} alt="Roti" className="rounded-3xl border border-[#222] shadow-2xl" />
          </div>

          <div id="story">
            <p className="text-orange-500 uppercase tracking-[0.3em] mb-5">
              Signature Sauce
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              FROM RESTAURANT
              <br />
              FAVOURITE
              <br />
              TO BOTTLED FIRE.
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 mb-10">
              Originally served inside Famena’s Famous Roti,
              this legendary sauce became a customer obsession.
              Now available to take home.
            </p>

            <div className="text-4xl font-black text-orange-500 mb-8">
              $20 CAD
            </div>

            <button onClick={goToCheckout} className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl text-lg font-black">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#0b0b0b] border-y border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-black mb-14 text-center">
            WHAT CUSTOMERS ARE SAYING
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 leading-8 mb-6">“Best hot sauce I’ve had in years. Perfect balance of heat and flavour.”</p>
              <div className="text-white font-bold">— Jason M.</div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 leading-8 mb-6">“I came for the roti and left with three bottles of sauce.”</p>
              <div className="text-white font-bold">— Sarah T.</div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 leading-8 mb-6">“Real Caribbean flavour. Serious heat. Completely addictive.”</p>
              <div className="text-white font-bold">— Mike D.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.3em] mb-5">
                Visit Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                FAMENA’S
                <br />
                FAMOUS ROTI
              </h2>

              <div className="space-y-4 text-gray-300 text-lg md:text-xl">
                <p>295 Garry Street</p>
                <p>Winnipeg, Manitoba</p>
                <p>(204) 414-9040</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=295+Garry+Street+Winnipeg+Manitoba"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl text-lg font-black"
              >
                GET DIRECTIONS
              </a>
            </div>

            <div>
              <img src={counterTop} alt="Restaurant" className="rounded-3xl border border-[#222] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1f1f1f] bg-[#020202] pb-28 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-5 mb-5">
              <img src={logo} alt="Famena Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />

              <div className="text-2xl md:text-3xl font-black text-orange-500">
                FAMENA’S HOT SAUCE
              </div>
            </div>

            <p className="text-gray-500 max-w-lg leading-8">
              Real flavour. Real heat. Real Winnipeg.
            </p>
          </div>

          <div className="text-gray-500 flex items-end">
            © 2026 Famena’s Hot Sauce
          </div>
        </div>
      </footer>

    </div>
  )
}