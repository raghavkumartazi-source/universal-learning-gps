import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#101022]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Universal Learning GPS • Navigate Your Future with AI.</p>
        <div className="flex gap-4">
          <Link href="/pricing" className="hover:text-[#FF7A00]">Pricing</Link>
          <Link href="/about" className="hover:text-[#FF7A00]">About</Link>
          <Link href="/contact" className="hover:text-[#FF7A00]">Support</Link>
        </div>
      </div>
    </footer>
  );
}
