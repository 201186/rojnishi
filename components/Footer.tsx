import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-16">

      {/* Navigation Links */}
      <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">

        <Link href="/" className="hover:text-yellow-400">
          Home
        </Link>

        <Link href="/features" className="hover:text-yellow-400">
          Features
        </Link>

        <Link href="/privacy" className="hover:text-yellow-400">
          Privacy Policy
        </Link>

        <Link href="/terms" className="hover:text-yellow-400">
          Terms & Conditions
        </Link>

        <Link href="/delete-account" className="hover:text-yellow-400">
          Delete Account
        </Link>

        <Link href="/contact" className="hover:text-yellow-400">
          Contact
        </Link>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-4 text-sm space-y-1">

        <p>© 2026 Teacher Daily Book. All rights reserved.</p>

        <p>
          Website:{" "}
          <a
            href="https://teacherdailybook.com"
            className="text-yellow-400 hover:underline"
          >
            teacherdailybook.com
          </a>
        </p>

        <p>Email: teacherdailybook@gmail.com</p>

        <p>Phone: 9726582609</p>

      </div>

    </footer>
  );
}