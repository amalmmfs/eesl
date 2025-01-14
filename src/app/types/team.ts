export interface TeamMember {
    name: string
    educationQualification: string[]
    image: string
    research_area?: string[]
  }
  
  export interface CurrentMembers {
    "Principal Investigator": TeamMember[]
    "Scientific Officer": TeamMember[]
    "Research Associate": TeamMember[]
    "PhD Students": TeamMember[]
    "Project Associate": TeamMember[]
    "Interns": TeamMember[]
  }
  
  export interface TeamData {
    currentMembers: CurrentMembers
    alumni: TeamMember[]
    collaborators: TeamMember[]
  }
  