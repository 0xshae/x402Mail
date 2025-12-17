'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Navbar */}
      <nav className="navbar" style={{
        padding: '1.25rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: '#000000',
        }}>
          x402Mail
        </div>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
        }}>
          <a href="#how-it-works" style={{
            textDecoration: 'none',
            color: '#333333',
            fontSize: '0.95rem',
            fontWeight: 300,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
          >
            How It Works
          </a>
          <a href="#waitlist" style={{
            textDecoration: 'none',
            color: '#333333',
            fontSize: '0.95rem',
            fontWeight: 300,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
          >
            Waitlist
          </a>
          <button style={{
            padding: '0.75rem 1.75rem',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#ffffff',
            backgroundColor: '#000000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '-0.01em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section - All content above fold */}
      <section style={{
        minHeight: '100vh',
        padding: '8rem 2rem 4rem',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Main Hero Content */}
        <div style={{
          marginBottom: '3rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
            fontWeight: 200,
            letterSpacing: '-0.05em',
            marginBottom: '1.5rem',
            color: '#000000',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}>
            An economic firewall for your inbox
          </h1>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: 300,
            color: '#444444',
            letterSpacing: '-0.01em',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '2.5rem',
          }}>
            Replace AI spam filters with refundable micropayments. Make spam financially impossible while preserving privacy.
          </p>
        </div>

        {/* Grid Layout - Problem, Solution, Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {/* Problem Card */}
          <div className="glass" style={{
            padding: '2rem',
            borderRadius: '20px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 200,
              marginBottom: '1rem',
              color: '#000000',
            }}>⚠️</div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              marginBottom: '0.75rem',
              color: '#000000',
              letterSpacing: '-0.01em',
            }}>
              The Problem
            </h3>
            <p style={{
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#555555',
              lineHeight: 1.6,
            }}>
              Sending one email costs the same as sending ten million: <strong style={{ fontWeight: 400 }}>$0.00</strong>. Spammers flood your inbox because there's zero marginal cost.
            </p>
          </div>

          {/* Solution Card */}
          <div className="glass" style={{
            padding: '2rem',
            borderRadius: '20px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 200,
              marginBottom: '1rem',
              color: '#000000',
            }}>💡</div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              marginBottom: '0.75rem',
              color: '#000000',
              letterSpacing: '-0.01em',
            }}>
              The Solution
            </h3>
            <p style={{
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#555555',
              lineHeight: 1.6,
            }}>
              The <strong style={{ fontWeight: 400 }}>x402 Protocol</strong> requires a small, refundable micropayment per email. Legitimate senders get refunded. Spammers lose money.
            </p>
          </div>

          {/* Benefits Card */}
          <div className="glass" style={{
            padding: '2rem',
            borderRadius: '20px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 200,
              marginBottom: '1rem',
              color: '#000000',
            }}>✨</div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              marginBottom: '0.75rem',
              color: '#000000',
              letterSpacing: '-0.01em',
            }}>
              The Result
            </h3>
            <p style={{
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#555555',
              lineHeight: 1.6,
            }}>
              Legitimate communication stays <strong style={{ fontWeight: 400 }}>free</strong>. Spam becomes <strong style={{ fontWeight: 400 }}>expensive</strong> and mathematically impossible.
            </p>
          </div>
        </div>

        {/* How It Works - Compact */}
        <div id="how-it-works" style={{
          marginTop: '2rem',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: '#000000',
          }}>
            How it works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              {
                step: '1',
                title: 'Handshake',
                description: 'Sender pays a small micropayment (e.g., $0.10) via x402 protocol.',
              },
              {
                step: '2',
                title: 'Delivery',
                description: 'Email lands in your inbox. Spammers can\'t afford to send millions.',
              },
              {
                step: '3',
                title: 'Rebate',
                description: 'You read it? Sender gets refunded. You mark spam? Money is burned.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass"
                style={{
                  padding: '1.75rem 1.5rem',
                  borderRadius: '16px',
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 200,
                  color: '#000000',
                  marginBottom: '0.75rem',
                  lineHeight: 1,
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  marginBottom: '0.5rem',
                  color: '#000000',
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#555555',
                  lineHeight: 1.5,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Compact */}
        <div id="waitlist" style={{
          marginTop: '3rem',
          textAlign: 'center',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s',
        }}>
          <button style={{
            padding: '1.25rem 3.5rem',
            fontSize: '1.1rem',
            fontWeight: 400,
            color: '#ffffff',
            backgroundColor: '#000000',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '-0.01em',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}
          >
            Join Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#888888',
        fontSize: '0.875rem',
        fontWeight: 300,
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}>
        <p>Privacy-focused email powered by the x402 Protocol</p>
      </footer>
    </main>
  )
}
