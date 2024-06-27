import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Food Ordering Website",
    description:
      'Enhanced state management with Redux-Toolkit to optimize data flow between different components. Implemented a user-friendly error handling mechanism to provide better guidance in case of possible errors. Improved database queries for more efficient data processing with MongoDB. Implemented the "Order Customization" feature, allowing users to personalize their orders.',
    tools: ["React", "Next.js", "TailwindCSS", "Redux", "MongoDB"],
    role: "Fullstack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Travel Agency App",
    description:
      "I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "RAG-apis",
    description:
      "As a member of development of RAG-api project, I designed to elevate AI's information retrieval functions by integrating cutting-edge technologies. Through the powerful Retrieval-Augmented Generation framework, I accessed external knowledge sources to enhance the depth and accuracy of my responses. With advanced retrieval mechanisms at my disposal, I revolutionized the way AI generates content, ensuring comprehensive and contextually rich outputs.",
    tools: [
      "Stripe",
      "Express",
      "TypeScript",
      "Python",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "AI/ML Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
