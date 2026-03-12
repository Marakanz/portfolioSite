import Stay from "../images/staycation.png";
import Distributed from "../images/Distributed task processor.png";

export const projects = [
  {
    name: "Staycation",
    url: "stay-cation.netlify.app",
    github: null,
    img: Stay,
    desc: "A full-stack hotel and private rental booking platform. Built a GraphQL API with Apollo-Server that reduced latency by 70% vs REST, with a responsive React/Redux frontend deployed on AWS EC2.",
    tools: ["React", "Redux", "GraphQL", "Apollo", "Node.js", "MongoDB", "AWS EC2", "Tailwind CSS"],
    metrics: ["40% faster load", "70% less latency", "99.9% uptime"],
  },
  {
    name: "Distributed Task Processor",
    img: Distributed,
    url: "github.com/Marakanz/Real-Time-Distributed-Task-Processing-System",
    github: "https://github.com/Marakanz/Real-Time-Distributed-Task-Processing-System",
    desc: "Enterprise-grade distributed task processing system handling 1000+ concurrent tasks with priority-based scheduling, circuit breakers, real-time WebSocket updates, and one-command Docker deployment.",
    tools: ["Python", "FastAPI", "Redis", "Docker", "WebSockets", "PostgreSQL"],
    metrics: ["1000+ concurrent tasks", "95% uptime", "80% wait time ↓"],
  },
];
