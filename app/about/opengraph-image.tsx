import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'About StillWell - English Lessons'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F1E8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', color: '#2C2C2C' }}>
          StillWell
        </div>
        <div style={{ fontSize: 40, color: '#8B9D83', marginTop: 20 }}>
          About Us
        </div>
        <div style={{ fontSize: 24, color: '#2C2C2C', marginTop: 40, opacity: 0.7 }}>
          Master English with Calm Confidence
        </div>
      </div>
    ),
    { ...size }
  )
}
