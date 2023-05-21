export interface Props {
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

export default function Project({projectDescription = [
    {
        projectName: "Porfolio Dev Full Stack",
        technologiesUsed: ["Preact", "Taiwlindcss"],
        aboutTheProject: "loream",
        links: [
            {description: "Github", url: "https://github.com"}
        ]
    }
]}: Props){

    return (
        <div class="w-full bg-black py-5 px-3">
            <h1 class="mb-4 text-center font-sans text-3xl text-white">Projects</h1>
            {
                projectDescription.map(project => (
                    <>
                        <div class="flex justify-between py-4">
                            <h2 class="text-white font-bold">{project.projectName}</h2>
                            <span class="text-white">↓</span>
                        </div>
                        <div>
                            <span class="text-white font-extralight text-xs">
                                {
                                    project.technologiesUsed.map(tech => {
                                        return " : " + tech;
                                    })
                                }
                            </span>
                            <p  class="text-white">{project.aboutTheProject}</p>
                            <div class="w-full gap-3 flex py-2">
                                {
                                    project.links.map(link => (
                                        <>
                                            <a href={!link.url ? '/' : link.url} class="text-purple-700">{link.description}</a>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div class="h-px w-full bg-white"></div>
                    </>
                ))
            }
        </div>
    )
}