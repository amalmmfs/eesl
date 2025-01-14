/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamMember } from "@/app/components/team-member";
import { teamData } from "@/app/data/team";

export default function TeamPage() {
  const { currentMembers, alumni, collaborators } = teamData;

  return (
    <div className="container px-4 py-12">
      <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
        Our Team
      </h1>

      <Tabs defaultValue="current-members" className="space-y-2">
        <TabsList className="flex justify-center w-full mb-8 mx-auto max-w-6xl">
          <TabsTrigger value="current-members">Current Members</TabsTrigger>
          <TabsTrigger value="alumni">Alumni</TabsTrigger>
          <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
        </TabsList>

        <TabsContent value="current-members">
          <Tabs defaultValue="principal-investigator" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center gap-2 mx-auto max-w-6xl">
              {Object.keys(currentMembers).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, "-")}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(currentMembers).map(([category, members]) => (
              <TabsContent
                key={category}
                value={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-center">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member: any) => (
                      <TeamMember key={member.name} {...member} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        <TabsContent value="alumni">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-center">
              Alumni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumni.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="collaborators">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight text-center">
              Collaborators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborators.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
