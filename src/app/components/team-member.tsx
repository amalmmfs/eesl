import Image from "next/image";
import { TeamMember as TeamMemberType } from "../types/team";

interface TeamMemberProps extends TeamMemberType {
  isPrincipal?: boolean;
}

export function TeamMember({
  name,
  image,
  educationQualification,
  research_area,
  about,
  isPrincipal,
}: TeamMemberProps) {
  if (isPrincipal) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 relative aspect-square">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="w-full md:w-2/3 p-6 space-y-4">
            <h4 className="text-2xl font-semibold">{name}</h4>
            {educationQualification && (
              <div className="space-y-2">
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
