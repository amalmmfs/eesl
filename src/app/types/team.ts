export interface TeamMember {
  name: string;
  educationQualification?: string[];
  image: string;
  research_area?: string[];
  about?: string;
  contactInfo?: {
    phone: string;
    email: string[];
    website: string;
    linkedin: string;
    googleScholar?: string;
  };
  timeline?: {
    period: string;
    position: string;
  }[];
  isPrincipal?: boolean;
}

export interface CurrentMembers {
  "Scientific Officer": TeamMember[];
  "Research Associates": TeamMember[];
  "PhD Students": TeamMember[];
  "Project Associates": TeamMember[];
  Interns: TeamMember[];
  "Research Engineer": TeamMember[];
  "Visiting Student": TeamMember[];
}

export interface TeamData {
  faculty: TeamMember[];
  currentMembers: CurrentMembers;
  alumni: TeamMember[];
  collaborators: TeamMember[];
}
