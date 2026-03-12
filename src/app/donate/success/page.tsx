import Link from "next/link";
import { CheckCircle, Heart, Share2, ArrowRight } from "lucide-react";

function SuccessContent({ searchParams }: { searchParams: Record<string, string> }) {
  const amount = searchParams.amount || "0";
  const campaign = searchParams.campaign || "General Fund";
  const monthly = searchParams.monthly === "true";

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-5">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-500 mb-6">
            Your {monthly ? "monthly" : ""} donation of{" "}
            <span className="font-bold text-green-700">${amount}</span> to{" "}
            <span className="font-semibold">{decodeURIComponent(campaign)}</span> has been received.
          </p>

          <div className="bg-green-50 rounded-2xl p-5 mb-6 text-left space-y-3">
            <p className="text-sm font-bold text-green-800">What happens next?</p>
            {[
              "A receipt will be emailed to you shortly.",
              "Your donation goes directly to our programs.",
              monthly ? "Your next payment will be processed in 30 days." : "Share your support and inspire others!",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <Heart className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 rounded-full text-sm transition-colors">
              <Share2 className="h-4 w-4" />
              Share on Social Media
            </button>
            <Link
              href="/campaigns"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm transition-colors"
            >
              Explore More Campaigns <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="block text-sm text-gray-400 hover:text-gray-600 transition-colors mt-2">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function DonationSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  return <SuccessContent searchParams={params} />;
}
