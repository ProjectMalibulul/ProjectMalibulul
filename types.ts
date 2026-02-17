
export interface TeamMember {
  name: string;
  github: string;
  role: string;
  avatar: string;
  specialty: string;
}

export interface Project {
  title: string;
  description: string;
  tag: string;
  stars?: number;
}

export interface GroundingSource {
  title: string;
  uri: string;
}
