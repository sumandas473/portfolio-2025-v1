"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 🔗 ProjectLinks button component
const ProjectLinks = ({ github, live }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-center" >
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300 shadow-lg"
      >
        <FaGithub />
        GitHub Repo
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        <FaExternalLinkAlt />
        Live Demo
      </a>
    </div>
  );
};

// 🧠 Project Section
export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// 📦 Project Data
const data = [

  // data one 
  {
    category: "Full Stack",
    title: "CrimeWatch App",
    thumbnail: (
      <img
        src="/crimewatch.png"
        alt="CrimeWatch App"
        className="w-full h-full object-cover rounded-md border border-white overflow-hidden"
      />
    ),
    github: "https://github.com/yourusername/crimewatch",
    live: "https://crimewatch.vercel.app",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Report crimes easily, anytime, anywhere.
          </span>{" "}
          CrimeWatch helps people report crimes without showing their name. It uses AI
          to help write reports better and faster. The design works great on mobile, so
          you can use it on the go. It also has login for different users — like admin
          and normal users. Powered by Next.js, Prisma, NeonDB, and Tailwind CSS.
        </p>

        <img
          src="/crimewatch.png"
          alt="CrimeWatch App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/yourusername/crimewatch"
          live="https://crimewatch.vercel.app"
        />
      </div>
    ),
  },


  {
    category: "Full Stack",
    title: "DevSpace - Social Media App",
    src: "https://images.unsplash.com/photo-1603791452906-caa12f2afa0e?q=80&w=3000",
    github: "https://github.com/yourusername/devspace",
    live: "https://devspace.live",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Connect, chat, and share in real time.
          </span>{" "}
          DevSpace is a social media app where users can chat live using
          Socket.io. Built with Node.js, MongoDB, and EJS, it has a clean MVC
          structure and uses Passport.js for login. Bootstrap keeps the UI clean,
          while secure sessions and optimized schemas make it fast and safe to
          use.
        </p>

        <img
          src="https://images.unsplash.com/photo-1603791452906-caa12f2afa0e?q=80&w=3000"
          alt="DevSpace App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/yourusername/devspace"
          live="https://devspace.live"
        />
      </div>
    ),
  },



  {
    category: "Frontend",
    title: "Cryptocurrency Tracker",
    src: "https://images.unsplash.com/photo-1611971261279-7e54c961f70e?q=80&w=3000",
    github: "https://github.com/yourusername/crypto-tracker",
    live: "https://crypto-tracker.live",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Stay updated with live crypto prices.
          </span>{" "}
          This responsive web app tracks real-time cryptocurrency prices using the
          Binance WebSocket API. It handles auto reconnects on network drops and
          is built using plain HTML5, CSS3, and JavaScript. The user interface is
          fully responsive, styled with Bootstrap 5 for clean and smooth visuals
          across all devices.
        </p>

        <img
          src="https://images.unsplash.com/photo-1611971261279-7e54c961f70e?q=80&w=3000"
          alt="Cryptocurrency Tracker"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/yourusername/crypto-tracker"
          live="https://crypto-tracker.live"
        />
      </div>
    ),
  },



  {
  category: "Full Stack",
  title: "BiteClub - Food Delivery Website",
  src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=3000", // You can replace with your own image
  github: "https://github.com/AbhishekKr23/BiteClub",
  live: "https://biteclub.onrender.com/",
  content: (
    <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
      <p>
        <span className="font-bold">
          Order food fast with BiteClub!
        </span>{" "}
        BiteClub is a full-stack food delivery platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse tasty meals, place secure orders, and view their order history. Stripe is used for safe and smooth payment. The UI is responsive, user-friendly, and works great on all devices.
      </p>

      <img
        src="/food.png"
        alt="BiteClub - Food Delivery Website"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />

      <ProjectLinks
        github="https://github.com/AbhishekKr23/BiteClub"
        live="https://biteclub.onrender.com/"
      />
    </div>
  ),
},

{
    category: "Full Stack",
    title: "CrimeWatch App",
    thumbnail: (
      <img
        src="/crimewatch.png"
        alt="CrimeWatch App"
        className="w-full h-full object-cover rounded-md border border-white overflow-hidden"
      />
    ),
    github: "https://github.com/yourusername/crimewatch",
    live: "https://crimewatch.vercel.app",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Report crimes easily, anytime, anywhere.
          </span>{" "}
          CrimeWatch helps people report crimes without showing their name. It uses AI
          to help write reports better and faster. The design works great on mobile, so
          you can use it on the go. It also has login for different users — like admin
          and normal users. Powered by Next.js, Prisma, NeonDB, and Tailwind CSS.
        </p>

        <img
          src="/crimewatch.png"
          alt="CrimeWatch App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/yourusername/crimewatch"
          live="https://crimewatch.vercel.app"
        />
      </div>
    ),
  },

  {
    category: "Full Stack",
    title: "CrimeWatch App",
    thumbnail: (
      <img
        src="/crimewatch.png"
        alt="CrimeWatch App"
        className="w-full h-full object-cover rounded-md border border-white overflow-hidden"
      />
    ),
    github: "https://github.com/yourusername/crimewatch",
    live: "https://crimewatch.vercel.app",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Report crimes easily, anytime, anywhere.
          </span>{" "}
          CrimeWatch helps people report crimes without showing their name. It uses AI
          to help write reports better and faster. The design works great on mobile, so
          you can use it on the go. It also has login for different users — like admin
          and normal users. Powered by Next.js, Prisma, NeonDB, and Tailwind CSS.
        </p>

        <img
          src="/crimewatch.png"
          alt="CrimeWatch App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/yourusername/crimewatch"
          live="https://crimewatch.vercel.app"
        />
      </div>
    ),
  },



];
