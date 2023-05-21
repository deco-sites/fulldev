export interface Props {
  title: string;
  description: string;
  links?: Array<{
    description: string;
    url: string;
  }>;
}

export default function AboutMe({
  title = "About Me",
  description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quis, placeat perspiciatis autem debitis enim! Rerum recusandae aut facilis corporis, natus architecto temporibus laudantium labore nostrum esse numquam alias aliquid.",
  links = [{ description: "Github", url: "https://github.com" }],
}: Props) {
  return (
    <div class="w-80 px-4 py-4 bg-slate-800 max-w-xs rounded-sm flex flex-col gap-2 shadow-sm shadow-black">
      <h2 class="text-white text-xl">{title}</h2>
      <p class="text-white text-xs">{description}</p>
      <div class="flex gap-2 items-center overflow-auto custom-scrollbar">
        {links.map((link) => (
          <a class="text-red-500" href={link.url}>{link.description}</a>
        ))}
      </div>
    </div>
  );
}
