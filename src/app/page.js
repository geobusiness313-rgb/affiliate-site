'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'Wireless Noise Cancelling Headphones',
    description: 'Great sound, long battery life, perfect for travel.',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    link: 'https://www.amazon.com/dp/YOUR_ASIN?tag=YOURTAG-20',
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    description: 'Track workouts, heart rate, and sleep.',
    image: 'https://via.placeholder.com/300x200?text=Fitness+Watch',
    link: 'https://www.amazon.com/dp/YOUR_ASIN?tag=YOURTAG-20',
  },
  {
    id: 3,
    title: 'Home Office Chair',
    description: 'Ergonomic, comfortable, and adjustable.',
    image: 'https://via.placeholder.com/300x200?text=Office+Chair',
    link: 'https://www.amazon.com/dp/YOUR_ASIN?tag=YOURTAG-20',
  },
]

export default function HomePage() {
  const [clicks, setClicks] = useState(0)

  const handleClick = (url) => {
    setClicks((c) => c + 1)
    window.open(url, '_blank')
  }

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Smart Gear Guide</h1>
        <p style={styles.subtitle}>
          Honest picks. Real value. Hand-selected Amazon finds.
        </p>
        <p style={styles.counter}>
          Affiliate link clicks: <strong>{clicks}</strong>
        </p>
      </header>

      <section style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              style={styles.image}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button
              style={styles.button}
              onClick={() => handleClick(product.link)}
            >
              View on Amazon →
            </button>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <p>
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </footer>
    </main>
  )
}

const styles = {
  main: {
    fontFamily: 'system-ui, sans-serif',
    padding: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
  counter: {
    marginTop: '15px',
    fontSize: '0.9rem',
    color: '#777',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '25px',
  },
  card: {
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 14px',
    background: '#ff9900',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: '60px',
    fontSize: '0.85rem',
    color: '#666',
    textAlign: 'center',
  },
}
