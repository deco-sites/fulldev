import DeveloperLevel from 'deco-sites/start/components/Progress/DeveloperLevel.tsx'
import AboutMe from 'deco-sites/start/components/AboutMe/AboutMe.tsx'
import Certificates from 'deco-sites/start/components/Certificates/Certificates.tsx'
import Project from 'deco-sites/start/components/Projects/Project.tsx'

export interface Props {
  developerLevel: {
    title: string;
    developerLevel: 'Junior' | 'Pleno' | 'Senior';
  },
  aboutMe: {
    title: string,
    description: string,
    links?: Array<{
      description: string,
      url: string
    }>
  },
  certificates: {
    title: string,
    certification: Array<
    {
        certificationName: string;
        color: 'blue' | 'red';
        urlCertification?: string
    }
    >
  },
  Projects: {
    projectDescription: Array<{
      projectName: string,
      technologiesUsed: Array<string>,
      aboutTheProject: string,
      links: Array<{
          description: string,
          url: string
      }>
    }>
  }
}

export default function Home({developerLevel, aboutMe, certificates, Projects}: Props) {
  return (
    <section class="h-auto w-full bg-gray-900 overflow-auto">
      <div class="py-3 w-full bg-gray-900 flex flex-col gap-3 items-center sm:flex-row">

        <div class="flex flex-col gap-2">

          <DeveloperLevel 
            title={developerLevel.title} 
            developerLevel={developerLevel.developerLevel}
          />

        </div>
        
        <div class="flex flex-col gap-2">

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
          <Project projectDescription={Projects.projectDescription}/>
        </div>
    </section>
  );
}
