import project1 from "../assets/projectsImg/tailkify-img.png";
import project2 from "../assets/projectsImg/gemini-clone-img.png";
import project3 from "../assets/projectsImg/neura-notes-img.png";
import project4 from "../assets/projectsImg/voting-app-img.png";
import project5 from "../assets/projectsImg/tic-tac-toe-img.png";

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
];

export const PROJECTS = [
    {
        title: "Talkify - Real-time chat app",
        image: project1,
        description:
        "Built with MERN, TypeScript, and Socket.io, Talkify enables seamless real-time messaging with text and images. It features profile customization, a dark/light theme toggle, and a fully responsive UI. Secure authentication ensures user data protection.",
        technologies: ["Reactjs", "Mongodb", "Nodejs", "Expressjs", "Typescript", "Tailwind",  "Socket.io"],
        live: "https://talkify-chat-app-kohl.vercel.app/",
        github: "https://github.com/suveshpandey/talkify-chat-app"
    },
    {
        title: "Google Gemini Fullstack Clone",
        image: project2,
        description:
        "A fully functional AI chatbot clone built with MERN, featuring instant responses, styled output, and dark/light mode. The backend ensures secure authentication, recent chat history storage, and seamless database integration for an enhanced user experience.",
        technologies: ["Reactjs", "Mongodb", "Nodejs", "Expressjs", "Tailwind"],
        live: "https://gemini-clone-sp.vercel.app/",
        github: "https://github.com/suveshpandey/google-gemini-clone"
    },
    {
        title: "Neura-Notes",
        image: project3,
        description:
        "A full-stack note-taking app built with MERN, featuring secure email verification, authentication, and rich note management. Users can create, tag, and upload files with notes, track saved dates, and manage profiles. The app offers a responsive UI for seamless access across devices.",
        technologies: ["Reactjs", "Mongodb", "Nodejs", "Expressjs", "Tailwind"],
        live: "https://neura-notes-frontend.vercel.app/signup",
        github: "https://github.com/suveshpandey/notes-app"
    },
    {
        title: "Voting App (Backend Project)",
        image: project4,
        description:
        "A backend project built with Node.js, Express.js, and MongoDB for learning purposes. It features secure authentication with Aadhaar-based login, one-person-one-vote enforcement, live vote count tracking, and an admin panel for candidate management. Users can update passwords while admins handle CRUD operations.",
        technologies: ["Nodejs", "Expressjs", "Mongodb", "Javascript"],
        live: "",
        github: "https://github.com/suveshpandey/voting-app-be"
    },
    {
        title: "Tic Tac Toe",
        image: project5,
        description:
        "A simple tic-tac-toe game.",
        technologies: ["HTML", "Tailwind", "Javascript",],
        live: "https://sp-tictactoe.netlify.app/",
        github: "https://github.com/suveshpandey/Tic-Tac-Toe"
    },
];

export const CONTACT = {
    phoneNo: "72248-99871 ",
    email: "jpsuvesh29@gmail.com",
};