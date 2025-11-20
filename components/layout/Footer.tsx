import { Container } from "@/components/ui/Container";

type Props = {
  org: any;
  contact: any;
};

export default function Footer({ org, contact }: Props) {
  return (
    <footer className="border-t border-slate-200 bg-white/80 mt-10">
      <Container className="py-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">
              {org.brandName} · Premium rugs in Gqeberha
            </p>
            <p className="text-xs text-slate-600">
              Rugs, runners and carpets for real South African homes. Visit our
              Gqeberha showroom by appointment for personalised advice.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-600">
              <span>Phone: {contact.phone}</span>
              <span> Email: {contact.email}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <p>Address: {contact.address}</p>
            {contact.hours && <p>Hours: {contact.hours}</p>}
            {org.social?.instagram && (
              <p>
                Instagram:{" "}
                <a
                  href={org.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  @myrugza
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {org.brandName}. All rights reserved.
          </p>
          <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
            <span className="whitespace-nowrap">Written by:</span>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              href="https://elixcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo/logo.png"
                alt="Elix Code Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              Elix Code
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
