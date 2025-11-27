import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'StillWell - English Lessons for Children'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #F5F1E8 0%, #FDFBF7 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 'bold', color: '#2C2C2C', marginBottom: 20 }}>
          StillWell
        </div>
        <div style={{ fontSize: 48, color: '#8B9D83', marginBottom: 40, textAlign: 'center' }}>
          Learn English, Thoughtfully
        </div>
        <div style={{ fontSize: 28, color: '#2C2C2C', opacity: 0.7, textAlign: 'center', maxWidth: 800 }}>
          Premium English lessons for children aged 13 and below
        </div>
        <div style={{ fontSize: 24, color: '#C97D60', marginTop: 60 }}>
          👩‍🏫 Taught by Ksenia Volchemateva
        </div>
      </div>
    ),
    { ...size }
  )
}
