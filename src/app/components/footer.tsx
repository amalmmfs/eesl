import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Electrochemical Energy Storage Laboratory</li>
              <li>Department of Chemistry</li>
              <li>Email: contact@eesl.org</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/research" className="hover:text-primary">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-primary">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary">
                  Team Members
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  ResearchGate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Electrochemical Energy Storage
            Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
