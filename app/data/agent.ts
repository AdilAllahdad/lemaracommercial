export interface Agent {
  name: string;
  title: string;
  license: string;
  image: string;
  phone: string;
  email: string;
}

export const agent: Agent = {
  name: "John Doe",
  title: "Commercial Real Estate Agent",
  license: "12345",
  image: "/images/agent.jpg",
  phone: "(555) 123-4567",
  email: "john@example.com"
};
