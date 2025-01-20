import Image from "next/image";
import { TeamMember as TeamMemberType } from "../types/team";

interface TeamMemberProps extends TeamMemberType {
  isPrincipal?: boolean;
  contactInfo?: {
    phone: string;
    email: string[];
    website: string;
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
                className="object-cover rounded-lg"
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square w-full relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-3">
        <h4 className="text-xl font-semibold">{name}</h4>
        {educationQualification && (
          <div className="space-y-1">
            {educationQualification.map((qual, index) => (
              <p key={index} className="text-sm text-gray-600">
                {qual}
              </p>
            ))}
          </div>
        )}
        {about && (
          <p className="text-sm text-gray-700 leading-relaxed">{about}</p>
        )}
        {research_area && (
          <div className="flex flex-wrap gap-2">
            {research_area.map((area, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
