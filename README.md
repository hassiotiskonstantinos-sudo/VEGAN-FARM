# VeganFarm NGO Website

A professional NGO website for VeganFarm built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Stripe** payments.

## Features

- **Homepage** — Hero, impact stats, featured campaigns, testimonials, newsletter signup
- **Campaigns** — Filterable fundraising campaigns with live progress bars
- **Donate** — 2-step Stripe checkout (one-time & monthly), preset + custom amounts
- **Projects** — Filterable global project showcase with impact metrics
- **About** — Mission, team, timeline, accreditations
- **Contact** — Inquiry form with type selection
- **Privacy Policy & Terms of Use**
- Fully responsive, accessible, zero warnings

---

## Local Development

### 1. Clone the repo

```bash
git clone https://github.com/hassiotiskonstantinos-sudo/VEGAN-FARM.git
cd VEGAN-FARM
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Stripe keys (get them from [dashboard.stripe.com](https://dashboard.stripe.com)):

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Test Stripe webhooks locally

```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe listen --forward-to localhost:3000/api/webhook
```

---

## Deployment on Vercel (Recommended)

### Option A — One-click via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this GitHub repository
3. Add the environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
4. Click **Deploy**

### Option B — Automatic via GitHub Actions

The `.github/workflows/deploy.yml` workflow deploys automatically when you push to `main`.

Add the following secrets in **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Where to find it |
|--------|-----------------|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after running `vercel link` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `STRIPE_SECRET_KEY` | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `STRIPE_WEBHOOK_SECRET` | [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks) |

#### Getting Vercel IDs

```bash
npm i -g vercel
vercel link   # creates .vercel/project.json with org + project IDs
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── campaigns/page.tsx        # Campaigns listing
│   ├── projects/page.tsx         # Projects listing
│   ├── contact/page.tsx          # Contact form
│   ├── donate/
│   │   ├── page.tsx              # Donation checkout (Stripe)
│   │   ├── success/page.tsx      # Post-payment success
│   │   └── cancel/page.tsx       # Payment cancelled
│   ├── api/
│   │   ├── create-payment-intent/route.ts   # Stripe PaymentIntent
│   │   └── webhook/route.ts                 # Stripe webhook handler
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── NewsletterForm.tsx
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | Full-stack React framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Stripe | Payment processing |
| Lucide React | Icons |

---

## Go Live Checklist

- [ ] Replace Stripe **test** keys with **live** keys in production
- [ ] Set up Stripe webhook endpoint: `https://yourdomain.com/api/webhook`
- [ ] Update social media links in `Footer.tsx`
- [ ] Update contact details in `Footer.tsx` and `contact/page.tsx`
- [ ] Connect newsletter form to your email service (Mailchimp, ConvertKit, etc.)
- [ ] Add your NGO's real logo/images
- [ ] Register domain and connect to Vercel

---

## License

MIT — Free to use for non-profit purposes.
