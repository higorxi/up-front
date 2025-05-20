export interface ProfessionalCardProps {
    id: number;
    name: string;
    profession: string;
    description: string;
    location: string;
    imageUrl: string;
    featured?: boolean;
    verified?: boolean;
    address?: any;
  }