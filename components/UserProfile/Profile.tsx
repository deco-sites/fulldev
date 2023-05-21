import { TechSelector } from "deco-sites/start/components/UserProfile/LogoHandler.tsx";
import { Avatar } from "deco-sites/start/components/ui/Avatar.tsx";

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Props {
  name: string;
  avatarImageUrl: string;
  jobDescription: string;
  location: Location;
  stackName: Array<{
    iconName:
      | "React"
      | "JavaScript"
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
  avatarImageUrl =
    "https://media.istockphoto.com/vectors/funny-cartoon-monster-face-vector-illustration-of-blue-creepy-monster-vector-id920484914?k=6&m=920484914&s=170667a&w=0&h=JFzZ07_4YvTJo63RVmtjrgIPSSQxNvecETVk1MS4uuI=",
  name = "Your Full Name",
  jobDescription = "Full Stack Developer",
  location = {
    city: "São Paulo",
    state: "SP",
    country: "Brazil",
  },
  stackName = [
    { iconName: "React" },
  ],
}: Props) {
  return (
    <div className="flex w-80 bg-slate-800 flex-col items-center justify-between p-5 md:p-10 text-white rounded-sm min-h-[60vh]">
      {!avatarImageUrl ? null : (
        <Avatar
          name={name}
          avatarUrl={avatarImageUrl}
        />
      )}
      <p className={`text-xl md:text-xl`}>
        {name}
      </p>
      <p className={`text-lg`}>
        {jobDescription}
      </p>
      <p className={`text-lg`}>
        {`${location.city}, ${location.state}, ${location.country}`}
      </p>
      <div
        className="grid my-4 gap-y-4 max-w-full overflow-x-auto"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}
      >
        {stackName.map((index) => (
          <TechSelector name={index.iconName} key={index.iconName} />
        ))}
      </div>
    </div>
  );
}
