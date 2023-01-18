import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "Sangam",
    company: "CloudNativefolks",
  },
  title: "Container Security",
  subtitle: "CloudNativeFolks Community Labs",
  frontendMastersLink: "",
  description: "Container Security",
  keywords: ["docker", "security", "container", "cyber"],
  social: {
    linkedin: "sangambiradaf",
    github: "sangam14",
    twitter: "BiradarSangam",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
