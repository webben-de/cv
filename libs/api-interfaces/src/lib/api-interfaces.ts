export interface Message {
  message: string;
}

export interface JobStep {
  from: Date;
  to: Date;
  description: string;
  job: {
    title: string;
    location: string;
    employer: {
      name: string;
      logo?: string;
    };
  };
  tags: string[];
  attachments: unknown[];
}
