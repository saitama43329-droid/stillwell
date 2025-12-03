# Connect Timeweb Domain to Vercel

## Your Current Issue
Your domains show "Invalid Configuration" because the DNS records aren't set up correctly in Timeweb.

## Step-by-Step Fix

### Step 1: Get Vercel's DNS Information

In Vercel (where you are now):
1. Click "Edit" on one of your domains (e.g., stillwell.ru)
2. Vercel will show you the DNS records you need to add
3. Keep this page open - you'll need these values

**Vercel will give you something like:**
- **Type**: A Record
- **Name**: @ (or leave blank)
- **Value**: 76.76.21.21 (Vercel's IP)

OR

- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

### Step 2: Log into Timeweb

1. Go to https://timeweb.com
2. Log into your account
3. Go to "Domains" or "DNS Management"
4. Select your domain (stillwell.ru or www.stillwell.ru)

### Step 3: Add DNS Records in Timeweb

You need to add these records in Timeweb's DNS settings:

#### For Root Domain (stillwell.ru):

**Option A - A Record (Recommended):**
```
Type: A
Host: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

**Option B - CNAME (if A record doesn't work):**
```
Type: CNAME
Host: @
Value: cname.vercel-dns.com
TTL: 3600
```

#### For WWW Subdomain (www.stillwell.ru):

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 4: Remove Old Records (Important!)

In Timeweb DNS settings, **delete or disable**:
- Old A records pointing to other IPs
- Old CNAME records pointing to Netlify
- Any conflicting records

Keep only:
- Your new Vercel A/CNAME records
- MX records (for email, if you have any)
- TXT records (for verification)

### Step 5: Wait for DNS Propagation

- DNS changes take 5-60 minutes (sometimes up to 24 hours)
- Vercel will automatically detect when it's working
- The "Invalid Configuration" error will disappear

### Step 6: Verify in Vercel

Back in Vercel:
1. Click "Refresh" button next to your domain
2. Wait a few minutes
3. Status should change from "Invalid Configuration" to "Valid Configuration"
4. Your domain will show as "Production"

## Common Timeweb DNS Settings Locations

Timeweb usually has DNS settings in:
- **Control Panel** → **Domains** → **DNS Records**
- **Domain Management** → **DNS Zone Editor**
- **Services** → **Domains** → **Manage DNS**

## Exact DNS Records You Need

Based on your screenshot, you have 3 domains. Here's what to set up:

### 1. stillwell.ru (root domain)
```
Type: A
Name: @
Value: 76.76.21.21
```

### 2. www.stillwell.ru (www subdomain)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. stillwell.vercel.app (automatic)
This one works automatically - no setup needed!

## Troubleshooting

### If "Invalid Configuration" persists:

1. **Check Timeweb DNS propagation:**
   - Use https://dnschecker.org
   - Enter your domain
   - Check if A/CNAME records are visible globally

2. **Verify no conflicts:**
   - Make sure you deleted old Netlify records
   - Only one A record for root domain
   - Only one CNAME for www

3. **Try alternative method:**
   - Instead of A record, use CNAME for root domain
   - Some registrars prefer CNAME for everything

4. **Contact Timeweb support:**
   - Ask them to point your domain to Vercel
   - Give them: 76.76.21.21 (A record) or cname.vercel-dns.com (CNAME)

## Quick Reference Card

**What to do in Timeweb:**
```
Domain: stillwell.ru
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Record 1:
  Type: A
  Host: @
  Points to: 76.76.21.21
  
Record 2:
  Type: CNAME
  Host: www
  Points to: cname.vercel-dns.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## After Setup Works

Once "Invalid Configuration" is gone:
1. Visit your domain (stillwell.ru)
2. It should show your site
3. Both http and https will work (Vercel auto-adds SSL)
4. Test from Russia to confirm accessibility

## Need Help?

If you're stuck:
1. Take a screenshot of your Timeweb DNS settings
2. Take a screenshot of Vercel's domain configuration
3. Share with Timeweb support or Vercel support

Timeweb support: https://timeweb.com/ru/help/
Vercel support: https://vercel.com/support
