import logo from '../assets/logo.PNG'

export default function Success() {

  return (

    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-3xl w-full bg-[#0d0d0d] border border-[#222] rounded-3xl p-10 md:p-16 text-center shadow-2xl">

        <img
          src={logo}
          alt="Famena Logo"
          className="w-32 mx-auto mb-8"
        />

        <div className="text-orange-500 text-6xl mb-6">
          🔥
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h1>

        <p className="text-gray-300 text-lg leading-9 max-w-2xl mx-auto mb-12">
          Your Famena’s Hot Sauce order has been received.
          We appreciate your support and can’t wait for you
          to experience the heat.
        </p>

        <div className="bg-[#111] border border-[#222] rounded-2xl p-8 mb-10 text-left">

          <h2 className="text-2xl font-black text-orange-500 mb-6">
            PICKUP INFORMATION
          </h2>

          <div className="space-y-4 text-gray-300 text-lg">

            <p>
              Famena’s Famous Roti
            </p>

            <p>
              295 Garry Street
            </p>

            <p>
              Winnipeg, Manitoba
            </p>

            <p>
              (204) 414-9040
            </p>

          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
            href="/"
            className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl text-lg font-black"
          >
            RETURN HOME
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=295+Garry+Street+Winnipeg+Manitoba"
            target="_blank"
            rel="noreferrer"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-10 py-5 rounded-2xl text-lg font-black"
          >
            GET DIRECTIONS
          </a>

        </div>

      </div>

    </div>

  )
}