import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    title: "Setup development environment",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
  },
];

export const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];

export const aboutData = [
  {
    slug: "about-app",
    title: "About the app",
    description:
      "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
  },
  {
    slug: "about-developer",
    title: "About the developer",
    description:
      "Otega is a software engineer passionate about writing clean code. You can contact me on Github and LinkedIn.",
  },
];
