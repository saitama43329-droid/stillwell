# Deploy to Vercel - Works Worldwide Including Russia

## Why Vercel?
- Built specifically for Next.js
- Better global CDN coverage than Netlify
- Works in Russia, China, and most restricted countries
- Free tier is generous
- Automatic deployments from GitHub

## Step-by-Step Deployment:

### 1. Sign Up for Vercel
Go to: https://vercel.com/signup
- Sign up with your GitHub account (easiest)

### 2. Import Your Project
1. Click "Add New..." → "Project"
2. Select your GitHub repository (stillwell or whatever it's named)
3. Vercel will auto-detect it's a Next.js project

### 3. Configure (Optional)
Vercel auto-configures Next.js, but you can verify:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. You'll get a URL like: `your-project.vercel.app`

### 5. Add Your Custom Domain
1. Go to Project Settings → Domains
2. Add your domain (stillwell-english.com)
3. Update your domain's DNS records as instructed
4. Wait for DNS propagation (5-60 minutes)

### 6. Test from Russia
- Ask someone in Russia to test
- Use a Russian VPN
- Use online tools: https://www.websiteplanet.com/webtools/down-or-not/

## Automatic Deployments
Every time you push to GitHub, Vercel automatically:
- Builds your site
- Deploys it
- Updates your live site

## Cost
- **Free tier**: Perfect for your site
- Unlimited bandwidth
- Automatic SSL
- Global CDN

## If You Want to Keep Netlify Too
You can deploy to both! Just:
1. Keep your Netlify setup
2. Add Vercel deployment
3. Use Vercel domain for Russian users
4. Use Netlify domain for other regions

## Support
If you have issues: https://vercel.com/support
