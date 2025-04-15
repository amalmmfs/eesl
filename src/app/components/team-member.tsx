import Image from "next/image";
import { TeamMember as TeamMemberType } from "../types/team";

interface TeamMemberProps extends Omit<TeamMemberType, "contactInfo"> {
  isPrincipal?: boolean;
  contactInfo?: {
    phone: string;
    email: string[];
    website: string;
    linkedin?: string;
    googleScholar?: string; // Add Google Scholar URL to the interface
  };
  timeline?: {
    period: string;
    position: string;
  }[];
}

export function TeamMember({
  name,
  image,
  contactInfo,
  timeline,
  educationQualification,
  research_area,
  about,
  isPrincipal,
}: TeamMemberProps) {
  if (isPrincipal) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Left Column - Image and Contact Info */}
          <div className="space-y-6">
            <div className="aspect-square relative">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <div className="space-y-2">
                <p className="font-medium text-gray-700">
                  Principal Scientist, Associate professor
                </p>
                <p className="text-gray-600">RISE, TCGCREST</p>
                <a
                  href={contactInfo?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
                >
                  {contactInfo?.website}
                </a>
                <p className="text-gray-600">Phn No: {contactInfo?.phone}</p>
                {contactInfo?.email.map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:underline block"
                  >
                    {email}
                  </a>
                ))}
                {contactInfo?.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline group"
                  >
                    <svg
                      className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Abhik Banerjee
                  </a>
                )}
                {contactInfo?.googleScholar && (
                  <a
                    href={contactInfo.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline group"
                  >
                    <svg
                      className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                    </svg>
                    Google Scholar
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Timeline and About */}
          <div className="col-span-2 space-y-8">
            {/* Timeline */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Professional Timeline
            </h3>
            <div className="space-y-4">
              {timeline?.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-gray-200 pl-4 mb-6"
                >
                  <span className="block text-sm font-bold text-gray-900 mb-1">
                    {item.period}
                  </span>
                  <span className="block text-base text-gray-700">
                    {item.position}
                  </span>
                </div>
              ))}
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                About
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                {about}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-square w-full relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-[center_25%] transition-transform duration-300 hover:scale-95"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-4">
        <h4 className="text-xl font-semibold text-gray-900">{name}</h4>

        {educationQualification && (
          <div className="space-y-2">
            {educationQualification.map((qual, index) => (
              <p
                key={index}
                className="text-sm text-gray-600 flex items-center"
              >
                <span className="mr-2">•</span>
                {qual}
              </p>
            ))}
          </div>
        )}

        {about && (
          <p className="text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
            {about}
          </p>
        )}

        {research_area && (
          <div className="space-y-2 pt-2">
            <p className="text-sm font-medium text-gray-900">Research Areas:</p>
            <div className="flex flex-wrap gap-2">
              {research_area.map((area, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
