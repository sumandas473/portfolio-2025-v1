import { cn } from "@/lib/utils";
import {
  IconLayoutDashboard,
  IconBrandNodejs,
  IconDatabase,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandFramer,
  IconBrandFigma,
  IconBug,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Services() {
  const features = [
   
    {
    title: "Frontend",
    description:
      "React.js, Next.js, Bootstrap, Tailwind CSS, Shadcn UI, HTML5, CSS, JavaScript, TypeScript",
    icon: <IconLayoutDashboard />,
  },
  {
    title: "Backend",
    description: "Node.js, Express.js, RESTful APIs",
    icon: <IconBrandNodejs />,
  },
  {
    title: "Database & Cloud",
    description: "MongoDB, AWS",
    icon: <IconDatabase />,
  },
  {
    title: "Tools & DevOps",
    description: "Git, GitHub, Vercel, Netlify, Postman",
    icon: <IconBrandGithub />,
  },
  {
    title: "IDE",
    description: "VS Code",
    icon: <IconBrandVscode />,
  },
  {
    title: "Animation",
    description: "Framer Motion, GSAP",
    icon: <IconBrandFramer />,
  },
  {
    title: "Design Tools",
    description: "Figma, Adobe XD",
    icon: <IconBrandFigma />,
  },
  {
    title: "Testing",
    description: "Jest, React Testing Library",
    icon: <IconBug />,
  },

   


  ];

  return (
    <div className="mt-[150px] flex flex-col" id="skills">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Skills</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-center md:text-lg text-neutral-700 dark:text-neutral-400 my-4">
            A versatile blend of frontend, backend, design, and DevOps expertise—equipped to build fast, modern, and scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
