import project1 from "../assets/projects/chat-image.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/text-utils.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a knack for crafting scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "5/2023 - 9/2023",
    role: " Full Stack Developer",
    company: "Bolt Iot",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML","CSS","Javascript", "React.js", "Next.js", "mongoDB"],
  },
 
  {
    year: "2022 -2023 -> (6months)",
    role: "Python, Machine Learning and Artificial Intelligence",
    company: "Perfect Plan B",
    description: `Developed proficiency in popular Python libraries and frameworks, such as NumPy, Pandas Matplotlib, and Scikit-learn.Hands-on experience in implementing machine learning models and artificial
intelligence algorithms through practical assignments and projects.`,
    technologies: ["Python", "Machine Learning", "Artifical Intilligence(AI)"],
  },
 
];

export const PROJECTS = [
  {
    title: "Chat Website Application ",
    image: project1,
    description:
      "The Chat Website Application is an interactive real-time messaging platformdeveloped using HTML, CSS, JavaScript, React, Node.js, and WebSocket. It provides a seamless communication experience with features like user authentication, chat rooms, real-time messaging, and message history. The application ensures secure and scalable communication, making it an efficient tool for users to stay connected..",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","WebSocket", "Socket.io"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Text Manipulation Tool (TextUtils )",
    image: project3,
    description:
      "TextUtils is a versatile text manipulation tool built using HTML, CSS, JavaScript, and React. With features like converting text to uppercase, lowercase, capitalizing letters, word counting, and providing a live preview, it simplifies text editing tasks and enhances productivity.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "2/411 Kudi Bhagtasni Housing Board Jodhpur ",
  phoneNo: "8504899739 ",
  email: "pratulsignh999@gmail.com",
};
