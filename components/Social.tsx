import { Github, Linkedin } from "lucide-react";
import { Icons } from "./icon";
import Link from "next/link";

const socials = [
  {
    icon: <Icons.gitHub />,
    link: "https://github.com/KuraoHikari",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/dewa-gede-indra-putra-8886a2127/",
  },
];

const Social = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, link }) => (
        <Link
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={iconsStyles}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
