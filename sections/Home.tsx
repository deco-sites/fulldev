import DeveloperLevel from "deco-sites/start/components/Progress/DeveloperLevel.tsx";
import AboutMe from "deco-sites/start/components/AboutMe/AboutMe.tsx";
import Certificates from "deco-sites/start/components/Certificates/Certificates.tsx";
import Project from "deco-sites/start/components/Projects/Project.tsx";
import Profile from "deco-sites/start/components/UserProfile/Profile.tsx";

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Props {
  ProfileDescription: {
    name: string;
    avatarImageUrl: string;
    jobDescription: string;
    location: Location;
    stackName: Array<{
      iconName:
        | "React"
        | "JavaScript"
        | "Angular"
        | "Vue.js"
        | "Node.js"
        | "Express.js"
        | "Django"
        | "Flask"
        | "Laravel"
        | "Spring"
        | ".NET"
        | "Ruby"
        | "Ruby on Rails"
        | "Python"
        | "Go"
        | "Rust"
        | "Java"
        | "Kotlin"
        | "Swift"
        | "Flutter";
    }>;
  };
  developerLevel: {
    title: string;
    developerLevel: "Junior" | "Pleno" | "Senior";
  };
  aboutMe: {
    title: string;
    description: string;
    links?: Array<{
      description: string;
      url: string;
    }>;
  };
  certificates: {
    title: string;
    certification: Array<
      {
        certificationName: string;
        color: "blue" | "red";
        urlCertification?: string;
      }
    >;
  };
  Projects: {
    projectDescription: Array<{
      projectName: string;
      technologiesUsed: Array<string>;
      aboutTheProject: string;
      links: Array<{
        description: string;
        url: string;
      }>;
    }>;
  };
}

const ProfileConfig = {
  name: "You Full Name",
  avatarImageUrl:
    "https://d2bsjm9patfdz0.cloudfront.net/images/0000649_monstrinho-do-medo.png",
  jobDescription: "Moster Full Stack",
  location: {
    city: "Moster City",
    state: "SM",
    country: "Mosterland",
  },
  stackName: [{ iconName: "React" }],
};
const developerLevelConfig = {
  title: "Dev Level",
  developerLevel: "Junior",
};
const AboutConfig = {
  title: "About Me",
  description: "Hello World",
  links: [{
    description: "Github",
    url: "https://github.com",
  }],
};

const certificatesConfig = {
  title: "Certificates",
  certification: [
    {
      certificationName: "React",
      color: "blue",
      urlCertification: "https://react.org",
    },
  ],
};

const ProjectsConfig = {
  projectDescription: [{
    projectName: "Portfolio Dev",
    technologiesUsed: ["Preact"],
    aboutTheProject: "Is this web site",
    links: [{
      description: "Github",
      url: "https://github.com",
    }],
  }],
};

export default function Home(
  {
    ProfileDescription,
    developerLevel,
    aboutMe = AboutConfig,
    certificates,
    Projects = ProjectsConfig,
  }: Props,
) {
  return (
    <section class="h-auto w-full bg-gray-900 overflow-auto">
      <div class="py-3 w-full bg-gray-900 flex flex-col gap-3 items-center sm:flex-row sm:justify-center">
        <div class="flex flex-col gap-2">
          <Profile
            name={ProfileDescription.name}
            avatarImageUrl={ProfileDescription.avatarImageUrl}
            jobDescription={ProfileDescription.jobDescription}
            location={ProfileDescription.location}
            stackName={ProfileDescription.stackName}
          />
          <DeveloperLevel
            title={developerLevel.title}
            developerLevel={developerLevel.developerLevel}
          />
        </div>

        <div class="flex flex-col gap-2 sm:items-start">
          <AboutMe
            title={aboutMe.title}
            description={aboutMe.description}
            links={aboutMe.links}
          />

          <Certificates
            title={certificates.title}
            certification={certificates.certification}
          />
        </div>
      </div>
      <div class="w-full mt-3">
        <Project projectDescription={Projects.projectDescription} />
      </div>
    </section>
  );
}
