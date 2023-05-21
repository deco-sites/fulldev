import { useState } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  name: string;
}

export const TechStacks = [{
  name: "React",
  logoUrl: "https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png",
}, {
  name: "Angular",
  logoUrl: "https://img.icons8.com/?size=512&id=71257&format=png",
}, {
  name: "JavaScript",
  logoUrl: "https://img.icons8.com/?size=512&id=108784&format=png",
}, {
  name: "Vue.js",
  logoUrl: "https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png",
}, {
  name: "Node.js",
  logoUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
}, {
  name: "Express.js",
  logoUrl: "https://img.icons8.com/?size=512&id=3752&format=png",
}, {
  name: "Django",
  logoUrl: "https://img.icons8.com/?size=512&id=qV-JzWYl9dzP&format=png",
}, {
  name: "Flask",
  logoUrl: "https://img.icons8.com/?size=512&id=MHcMYTljfKOr&format=png",
}, {
  name: "Laravel",
  logoUrl: "https://img.icons8.com/?size=512&id=114956&format=png",
}, {
  name: "Spring",
  logoUrl: "https://img.icons8.com/?size=512&id=90519&format=png",
}, {
  name: ".NET",
  logoUrl: "https://img.icons8.com/?size=512&id=0buoqrXrHQZn&format=png",
}, {
  name: "Ruby",
  logoUrl: "https://img.icons8.com/?size=512&id=45345&format=png",
}, {
  name: "Ruby on Rails",
  logoUrl: "https://img.icons8.com/?size=512&id=ZMFmFsekpKfY&format=png",
}, {
  name: "Python",
  logoUrl: "https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png",
}, {
  name: "Go",
  logoUrl: "https://img.icons8.com/?size=512&id=7ej5ASIwdQXG&format=png",
}, {
  name: "Rust",
  logoUrl: "https://img.icons8.com/?size=512&id=XWesbnSd4AUa&format=png",
}, {
  name: "Java",
  logoUrl: "https://img.icons8.com/?size=512&id=2572&format=png",
}, {
  name: "Kotlin",
  logoUrl: "https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png",
}, {
  name: "Swift",
  logoUrl: "https://img.icons8.com/?size=512&id=24465&format=png",
}, {
  name: "Flutter",
  logoUrl: "https://img.icons8.com/?size=512&id=pCvIfmctRaY8&format=png",
}];

export const TechSelector = (props: Props) => {
  const [selectedTech, setSelected] = useState("");

  const select = (selectedTech: string) => {
    TechStacks.forEach((index) => {
      if (index.name.toLowerCase() === selectedTech.toLowerCase()) {
        setSelected(index.logoUrl);
      }
    });
  };
  select(props.name);
  return (
    <Image
      class="rounded-full"
      src={`${selectedTech}`}
      title={props.name}
      alt={props.name}
      width={40}
      height={40}
    >
    </Image>
  );
};
