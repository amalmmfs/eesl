import Image from "next/image";
import { TeamMember as TeamMemberType } from "../types/team";

export function TeamMember({
  name,
  image,
  educationQualification,
  research_area,
  about,
}: TeamMemberType) {
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
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        {educationQualification && (
          <div className="mb-3">
            {educationQualification.map((qual, index) => (
              <p key={index} className="text-sm text-gray-600">
                {qual}
              </p>
            ))}
          </div>
        )}
        {about && (
          <div className="mb-3">
            <p className="text-sm text-gray-700 leading-relaxed">{about}</p>
          </div>
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
