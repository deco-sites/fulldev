import ContainerCertificate from 'deco-sites/start/components/Certificates/ContainerCertificate.tsx'

export interface Props {
    title: string;
    certification: Array<
    {
        certificationName: string;
        color: 'blue' | 'red';
        urlCertification?: string
    }
    >
}

export default function Certificates({certification = [{certificationName: "React JS", color: 'red', urlCertification: "https://reactjs.org"}], title = "Certificates"}: Props){
    return (
        <div class="w-80 h-36 px-4 py-4 bg-slate-800 max-w-xs rounded-sm flex flex-col gap-2 shadow-sm shadow-black">

            <h1 class="text-white text-xl">{title}</h1>
            <div class="w-full flex flex-wrap gap-2">
                {certification.map(certificate => (
                    <ContainerCertificate
                        certificateName={certificate.certificationName}
                        color={certificate.color}
                        link={certificate.urlCertification}
                    />
                ))}
            </div>

        </div>
    )
}