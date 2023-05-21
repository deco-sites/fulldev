export interface Props {
    certificateName: string,
    color: string,
    link?: string
}

export default function ContainerCertificate({certificateName, color, link}: Props){

    return (
        <div class={`bg-${color}-500 w-32 h-7 flex items-center justify-center rounded-sm py-1 px-1 transition hover:bg-${color}-700 cursor-pointer`}>
            <a href={!link ? '/' : link} class="text-white font-bold text-center">{certificateName}</a>
        </div>
    )
}