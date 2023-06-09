import Image from "deco-sites/std/components/Image.tsx";

export function Avatar({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl: string;
}) {
  return (
    <div className="flex items-center justify-center h-28 md:h-44 w-28 md:w-44 rounded-full">
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
