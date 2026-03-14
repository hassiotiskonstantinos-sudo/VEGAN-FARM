import Link from "next/link";
import { XCircle, ArrowRight } from "lucide-react";

export default function DonationCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-100 rounded-full p-5">
            <XCircle className="h-12 w-12 text-orange-500" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Η Δωρεά Ακυρώθηκε</h1>
        <p className="text-gray-500 mb-8">
          Δεν πειράζει — η πληρωμή δεν έγινε. Μπορείς να προσπαθήσεις ξανά όποτε είσαι έτοιμος.
        </p>
        <div className="space-y-3">
          <Link
            href="/donate"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm transition-colors"
          >
            Δοκίμασε Ξανά <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/" className="block text-sm text-gray-400 hover:text-gray-600 transition-colors">
            Επιστροφή στην Αρχική
          </Link>
        </div>
      </div>
    </div>
  );
}
