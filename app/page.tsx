export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#ffffff',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: '#000000',
        }}>
          x402Mail
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 300,
          color: '#666666',
          letterSpacing: '0.01em',
        }}>
          Work in progress
        </p>
      </div>
    </main>
  )
}

