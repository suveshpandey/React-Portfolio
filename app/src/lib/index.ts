import project1 from "../assets/projectsImg/tailkify-img.png";
import project2 from "../assets/projectsImg/gemini-clone-img.png";
import project3 from "../assets/projectsImg/neura-notes-img.png";
import project4 from "../assets/projectsImg/excaliboard-dashboard.png";
import project5 from "../assets/projectsImg/code-pilot.png";

export const PROJECTS = [
    {
        title: "CodePilot – AI-Assisted Code Learning Platform",
        image: project5,
        description: "CodePilot is an AI-assisted code learning platform built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL. It provides a seamless environment where users can write and run code in multiple languages while receiving real-time AI-powered hints, one-click code fixes, debugging support, and chatbot assistance for better concept clarity. Alongside the code editor, the platform features personal notes, blogs, and an AI-powered quiz for interactive learning. It also integrates YouTube videos with infinite scrolling and caching for smooth performance. With secure authentication via email OTP and Google OAuth, CodePilot offers an engaging, efficient, and accessible way for students and beginners to learn and practice coding.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "NextAuth.js", "shadcn/ui", "Vercel (Deployment)", "Google Gemini", "Intersection Observer API (infinite scroll)", "Node-Cache"],
        live: "https://code-pilot-kappa.vercel.app/",
        github: "https://github.com/suveshpandey/CodePilot"
    },
    {
        title: "Excaliboard - Real-time collaborative canvas app (excalidraw.com clone)",
        image: project4,
        description: "Excalidraw.com-inspired real-time collaborative canvas built with Next.js, WebSockets, and PostgreSQL. Supports multi-user drawing, Google Auth, live room dashboards, and persistent canvas storage. Built in a scalable monorepo with a responsive UI using Tailwind CSS.",
        technologies: ["NextJS", "PostgreSQL", "NodeJS", "ExpressJS", "Typescript", "Tailwind", "WebSocket (ws)", "NextAuth.js", "Monorepo Structure"],
        live: "https://excaliboard-frontend.vercel.app/",
        github: "https://github.com/suveshpandey/excalidraw.com"
    },
    {
        title: "Talkify - Real-time chat app",
        image: project1,
        description: "Built with MERN, TypeScript, and Socket.io, Talkify enables seamless real-time messaging with text and images. It features profile customization, a dark/light theme toggle, and a fully responsive UI. Secure authentication ensures user data protection.",
        technologies: ["ReactJS", "Mongodb", "NodeJS", "ExpressJS", "Typescript", "Tailwind",  "Socket.io"],
        live: "https://talkify-chat-app-kohl.vercel.app/",
        github: "https://github.com/suveshpandey/talkify-chat-app"
    },
    {
        title: "Google Gemini Fullstack Clone",
        image: project2,
        description: "A fully functional AI chatbot clone built with MERN, featuring instant responses, styled output, and dark/light mode. The backend ensures secure authentication, recent chat history storage, and seamless database integration for an enhanced user experience.",
        technologies: ["ReactJS", "Mongodb", "NodeJS", "ExpressJS", "Tailwind"],
        live: "https://gemini-clone-sp.vercel.app/",
        github: "https://github.com/suveshpandey/google-gemini-clone"
    },
    {
        title: "Neura-Notes",
        image: project3,
        description: "A full-stack note-taking app built with MERN, featuring secure email verification, authentication, and rich note management. Users can create, tag, and upload files with notes, track saved dates, and manage profiles. The app offers a responsive UI for seamless access across devices.",
        technologies: ["ReactJS", "Mongodb", "NodeJS", "ExpressJS", "Tailwind"],
        live: "https://neura-notes-frontend.vercel.app/signup",
        github: "https://github.com/suveshpandey/notes-app"
    },
];

export const CONTACT = {
    phoneNo: "72248-99871 ",
    email: "jpsuvesh29@gmail.com",
};