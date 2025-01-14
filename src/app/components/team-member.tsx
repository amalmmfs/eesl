import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TeamMember as TeamMemberType } from "@/app/types/team";

export function TeamMember({
  name,
  educationQualification,
  image,
  research_area,
}: TeamMemberType) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow mx-auto max-w-6xl">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {educationQualification}
        </p>
        <p className="text-sm">{research_area}</p>
      </CardContent>
    </Card>
  );
}
