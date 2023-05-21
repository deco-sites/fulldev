export interface Props {
    headerColor: "bg-purple-700" | "bg-green-700" | "bg-blue-700";
}

export default function Header({ headerColor = "bg-purple-700" }: Props) {
    return (
        <div class={`w-full h-20 ${headerColor} shadow-xl`}></div>
    )
}