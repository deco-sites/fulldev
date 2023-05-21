import Image from "deco-sites/std/components/Image.tsx";

export interface Color {
  red: number;
  green: number;
  blue: number;
}

export function Avatar({
  avatarBackgroundColor,
  name,
  avatarUrl,
}: {
  avatarBackgroundColor: Color;
  name: string;
  avatarUrl: string;
}) {
  const avatarBgColorStyle =
    `rgb(${avatarBackgroundColor.red}, ${avatarBackgroundColor.green}, ${avatarBackgroundColor.blue})`;

  return (
    <div
      className="flex items-center justify-center h-28 md:h-44 w-28 md:w-44 rounded-full"
      style={{ backgroundColor: avatarBgColorStyle }}
    >
      <Image
        className="rounded-full w-full h-full object-cover shadow-lg"
        src={avatarUrl}
        title={name || "Name"}
        alt={name || "Name"}
        width={88}
        height={88}
      />
    </div>
  );
}
