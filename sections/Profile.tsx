import { TechSelector } from "../components/ui/LogoHandler.tsx";
import { Avatar } from "../components/ui/Avatar.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface Color {
  red: number;
  green: number;
  blue: number;
}

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Props {
  profileBackgroundColor: Color;
  avatarBackgroundColor: Color;
  name: string;
  jobDescription: string;
  location: Location;
  stackName: Array<{
    iconName:
      | "React"
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
}

export default function Profile({
  profileBackgroundColor,
  avatarBackgroundColor,
  name,
  jobDescription,
  location,
  stackName = [],
}: Props) {
  const profileBgColorStyle = `rgb(${profileBackgroundColor.red}, ${profileBackgroundColor.green}, ${profileBackgroundColor.blue})`;

  return (
    <div className="flex flex-col items-center justify-between p-5 md:p-10 text-white bg-white rounded-lg md:w-1/3 min-h-[70vh]" style={{ backgroundColor: profileBgColorStyle }}>
      <Avatar avatarBackgroundColor={avatarBackgroundColor} name={name} />
      <p className={`text-2xl md:text-4xl ${!name && "text-gray-400"}`}>{name || "Name"}</p>
      <p className={`text-lg md:text-xl ${!jobDescription && "text-gray-400"}`}>{jobDescription || "Job Description"}</p>
      <p className={`text-lg md:text-xl ${!location && "text-gray-400"}`}>{location ? `${location.city}, ${location.state}, ${location.country}` : "City, State, Country"}</p>
      <div className="grid my-4 gap-y-4 max-w-full overflow-x-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}>
        {stackName.map((index) => <TechSelector name={index.iconName} key={index.iconName} />)}
      </div>
    </div>
  );
}
