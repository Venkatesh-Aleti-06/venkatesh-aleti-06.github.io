export const portfolioData = {
  name: 'Aleti Venkatesh',
  initials: 'AV',
  title: 'Backend & AI Engineer',
  location: 'Hyderabad, India',
  tagline: 'Python · FastAPI · GenAI · PostgreSQL',
  email: 'aletivenkatesh2001@gmail.com',
  linkedin: 'https://linkedin.com/in/venkatesh-aleti',
  github: 'https://github.com/venkateshaleti',
  resume: 'Aleti_Venkatesh_Resume.pdf',

  about: "I'm a backend and AI engineer at Accenture with 3 years of experience building Python/FastAPI services, REST APIs, and PostgreSQL schemas. I specialize in Generative AI applications - RAG pipelines, LangGraph workflows, and multi-agent systems using Google ADK and CrewAI. I enjoy turning slow manual workflows into automated systems that ship in production. Open to Backend and AI Engineering roles.",

  skills: [
    { name: 'Python', color: 'blue' },
    { name: 'FastAPI', color: 'teal' },
    { name: 'REST APIs', color: 'blue' },
    { name: 'PostgreSQL', color: 'amber' },
    { name: 'SQL Server', color: 'amber' },
    { name: 'Pydantic', color: 'teal' },
    { name: 'LangGraph', color: 'purple' },
    { name: 'LangChain', color: 'purple' },
    { name: 'CrewAI', color: 'coral' },
    { name: 'Google ADK', color: 'teal' },
    { name: 'MCP', color: 'purple' },
    { name: 'Azure OpenAI', color: 'pink' },
    { name: 'Vertex AI', color: 'pink' },
    { name: 'RAG', color: 'coral' },
    { name: 'Prompt Engineering', color: 'purple' },
    { name: 'Agentic AI', color: 'coral' },
    { name: 'Docker', color: 'blue' },
    { name: 'Azure', color: 'blue' },
    { name: 'Azure DevOps', color: 'blue' },
    { name: 'Git', color: 'amber' },
    { name: 'Redis', color: 'coral' }
  ],

  projects: [
    {
      name: 'CGS Audit & ReconAgent',
      period: 'Apr 2026 – Present',
      icon: 'ti-robot',
      color: 'purple',
      description: 'Agentic audit automation using Google ADK agents and FastAPI. Replaced a week-long manual Excel audit process with one that runs in under a day.',
      stack: ['FastAPI', 'Google ADK', 'Vertex AI', 'PostgreSQL']
    },
    {
      name: 'AIR 2.0',
      period: 'Sep 2025 – Mar 2026',
      icon: 'ti-share',
      color: 'teal',
      description: 'LangGraph multi-step workflow with SSE streaming each node progress to the UI, so users see which step finished and which is running.',
      stack: ['FastAPI', 'LangGraph', 'SSE', 'Azure OpenAI']
    },
    {
      name: 'CPF',
      period: 'Feb 2025 – Aug 2025',
      icon: 'ti-file-text',
      color: 'amber',
      description: 'CrewAI orchestrator generating multi-section reports from structured and unstructured inputs with Azure OpenAI.',
      stack: ['FastAPI', 'CrewAI', 'Azure OpenAI', 'Python']
    },
    {
      name: 'Gen ISP',
      period: 'Feb 2024 – Jan 2025',
      icon: 'ti-database',
      color: 'coral',
      description: 'REST APIs on SQL Server with telemetry, authentication, and reporting endpoints for an internal service portal.',
      stack: ['REST APIs', 'SQL Server', 'Telemetry']
    }
  ],

  certifications: [
    { name: 'Claude Certified Architect – Foundations', issuer: 'Anthropic Academy', year: '2026' },
    { name: 'GitHub Copilot (GH-300)', issuer: 'GitHub', year: '2025' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2024' },
    { name: 'Power Platform (PL-900)', issuer: 'Microsoft', year: '2024' }
  ]
};
