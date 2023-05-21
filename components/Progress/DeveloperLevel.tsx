import Progress from "deco-sites/start/components/Progress/Progress.tsx";

export interface Props {
  title: string;
  developerLevel: "Junior" | "Pleno" | "Senior";
}

export default function DeveloperLevel(
  { title = "Developer Level", developerLevel }: Props,
) {
  return (
    <div class="w-80 h-36 px-4 py-4 bg-slate-800 max-w-xs rounded-sm flex flex-col gap-2 shadow-sm shadow-black">
      <h1 class="text-white text-xl">{title}</h1>
      <Progress nivel={developerLevel} />
    </div>
  );
}
