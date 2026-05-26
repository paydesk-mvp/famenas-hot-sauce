export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#111111',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          background:
            'linear-gradient(to bottom, #1a1a1a, #111111)',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            color: '#ff6b00',
            marginBottom: '20px',
          }}
        >
          FAMENA’S HOT SAUCE
        </h1>

        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#dddddd',
          }}
        >
          Caribbean heat. Bold flavour. Built from generations
          of spice, culture, and family tradition.
        </p>

        <button
          style={{
            marginTop: '40px',
            padding: '15px 40px',
            fontSize: '1rem',
            backgroundColor: '#ff6b00',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Buy Now — $20
        </button>
      </section>

      {/* PRODUCT SECTION */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
          }}
        >
          Small Batch Caribbean Hot Sauce
        </h2>

        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
            color: '#cccccc',
          }}
        >
          Crafted with Ghost Peopper, Scorpion Peppers, Scotch Bonnet, bold island spices,
          and authentic Caribbean flavour. Perfect for doubles,
          roti, wings, grilled meats, and everything in between.
        </p>
      </section>
    </div>
  )
}