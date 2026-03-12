import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    const { amount, campaign, isMonthly } = await req.json();

    if (!amount || typeof amount !== "number" || amount < 50) {
      return NextResponse.json({ error: "Invalid amount. Minimum donation is $0.50." }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Payment processing is not configured. Please add your Stripe keys to .env.local" },
        { status: 503 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover",
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        campaign: campaign ?? "General Fund",
        donation_type: isMonthly ? "monthly" : "one-time",
        organization: "VeganFarm NGO",
      },
      description: `VeganFarm NGO Donation – ${campaign ?? "General Fund"}`,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
