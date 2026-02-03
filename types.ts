
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  context: string;
  challenge: string;
  strategy: string;
  execution: string[];
  impact: string[];
  myRole: string;
  imageUrl: string;
  tags: string[];
  description: string; // Brief summary for index
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Tool {
  name: string;
  category: 'Ads' | 'CRM' | 'Creative' | 'Management' | 'Analytics';
}
