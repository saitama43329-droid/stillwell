# Backend Planning for Russia Compatibility

## Current Status
Your site is frontend-only (no backend). This document plans for future backend features.

## Vercel Backend Capabilities

### Serverless Functions (API Routes)
Vercel supports Next.js API routes that work as serverless backend functions.

**Example structure:**
```
/app
  /api
    /contact
      route.ts       ← POST endpoint for contact form
    /booking
      route.ts       ← POST endpoint for lesson booking
    /lessons
      route.ts       ← GET endpoint for lesson data
```

## Russia-Compatible Backend Stack

### ✅ Recommended Services (Work in Russia)

#### Database Options:
1. **Vercel Postgres** - Built-in, works everywhere
2. **MongoDB Atlas** - Global, accessible from Russia
3. **Supabase** - Open-source, good global access
4. **PlanetScale** - MySQL, works in Russia

#### Email Services:
1. **Resend** - Modern, works in Russia
2. **SendGrid** - Generally accessible
3. **Mailgun** - Good global coverage
4. **SMTP.ru** - Russian email service (most reliable)

#### Payment Processing:
1. **YooKassa (Yandex)** - Russian payment gateway (BEST for Russia)
2. **Stripe** - May have issues in Russia
3. **PayPal** - Blocked in Russia since 2022
4. **Tinkoff** - Russian bank payment system

#### File Storage:
1. **Vercel Blob** - Built-in, works everywhere
2. **Cloudflare R2** - Good global access
3. **Yandex Object Storage** - Russian S3-compatible storage

### ❌ Avoid (Blocked/Restricted in Russia)
- Google Firebase
- Google Cloud services
- PayPal
- Some AWS services
- Facebook/Meta APIs

## Example Backend Features for StillWell

### 1. Contact Form API
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  // Send email via SMTP.ru or Resend
  // Store in database
  // Send WhatsApp notification
  
  return Response.json({ success: true });
}
```

### 2. Lesson Booking System
```typescript
// app/api/booking/route.ts
export async function POST(request: Request) {
  const { studentName, lessonType, date, time } = await request.json();
  
  // Store booking in database
  // Send confirmation email
  // Notify teacher via WhatsApp API
  
  return Response.json({ bookingId: '...' });
}
```

### 3. Student Dashboard
```typescript
// app/api/student/[id]/route.ts
export async function GET(request: Request) {
  // Fetch student progress from database
  // Return lesson history, upcoming lessons
  
  return Response.json({ student: {...} });
}
```

## Deployment Strategy

### Option 1: Vercel Only (Recommended)
- Deploy frontend + backend to Vercel
- Use Vercel Postgres for database
- Use Russia-friendly services (YooKassa, SMTP.ru)
- **Pros**: Simple, one platform, works globally
- **Cons**: Some services might be slow in Russia

### Option 2: Hybrid (Most Reliable for Russia)
- Frontend on Vercel (global access)
- Backend on Russian VPS (Yandex Cloud)
- Database on Russian server
- **Pros**: Guaranteed fast access from Russia
- **Cons**: More complex setup, higher cost

### Option 3: Dual Deployment
- Main site on Vercel (global)
- Russia-specific backend on Yandex Cloud
- Route Russian users to Russian backend
- **Pros**: Best of both worlds
- **Cons**: Most complex, maintain two backends

## Recommended Approach for StillWell

Since your target audience is primarily in Russia (Zabaykalsky Krai):

### Phase 1: Start with Vercel (Now)
- Deploy static site to Vercel
- Test accessibility from Russia
- Use WhatsApp for contact (no backend needed yet)

### Phase 2: Add Simple Backend (When Needed)
- Add contact form API route on Vercel
- Use Resend or SMTP.ru for emails
- Store data in Vercel Postgres

### Phase 3: Add Booking System (Future)
- Lesson booking API
- Student dashboard
- Payment integration with YooKassa (Russian)

### Phase 4: Optimize for Russia (If Needed)
- If Vercel is slow from Russia, move backend to Yandex Cloud
- Keep frontend on Vercel for global access
- Use Russian services (Yandex, VK, etc.)

## Testing Backend from Russia

Before launching backend features:
1. Deploy to Vercel staging
2. Test from Russia using VPN
3. Check API response times
4. Test payment processing
5. Verify email delivery

## Cost Estimates

### Vercel (Global)
- **Free tier**: 100GB bandwidth, serverless functions
- **Pro**: $20/month (unlimited bandwidth)

### Yandex Cloud (Russia)
- **VPS**: ~$5-15/month
- **Database**: ~$10/month
- **Storage**: ~$2/month

### Services
- **Email (SMTP.ru)**: ~$5-10/month
- **Database (MongoDB Atlas)**: Free tier available
- **Payments (YooKassa)**: Transaction fees only

## Next Steps

1. ✅ Deploy current static site to Vercel
2. ✅ Test accessibility from Russia
3. ⏳ Plan which backend features you need
4. ⏳ Choose Russia-compatible services
5. ⏳ Build and test backend incrementally

## Questions to Consider

Before building backend:
- Do you need user accounts/login?
- Do you need online payments or just WhatsApp booking?
- Do you need to store student progress/data?
- Do you need automated scheduling?
- Do you need email notifications?

Start simple, add complexity only when needed!
