import Link from "next/link";
import { Compass, Mail } from "lucide-react";
import { TwitterXIcon, LinkedInIcon, GithubIcon, YoutubeIcon } from "@/components/SocialIcons";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Roadmap Generator", href: "/roadmap" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: TwitterXIcon, href: "#", label: "Twitter" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:support@ulg.ai", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Universal <span className="text-[#ff7a00]">Learning GPS</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Navigate Your Future with AI. Personalized learning roadmaps to
              guide you toward your career goals.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff7a00] hover:border-[#ff7a00]/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#ff7a00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Universal Learning GPS. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ for learners worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
