import { useState } from "react";
import { RadixIconsGithubLogo } from "./icons/RadixIconsGithubLogo";
import { BiLinkedin } from "./icons/BiLinkedin";
import { MdiWeb } from "./icons/MdiWeb";
import { MingcuteDocument2Line } from "./icons/MingcuteDocument2Line";
import resume from "../assets/hemlata-vishwakarma.pdf";

function AsideComponents() {
  const [links] = useState([
    {
      url: "https://github.com",
      icon: <RadixIconsGithubLogo />,
      title: "GitHub",
    },
    { url: "https://linkedin.com", icon: <BiLinkedin />, title: "LinkedIn" },
    { url: "https://zonetocode.com", icon: <MdiWeb />, title: "ZonetoCode" },
    { url: resume, icon: <MingcuteDocument2Line />, title: "Resume" },
  ]);

  return (
    <ul className="fixed top-14 left-5 z-50 flex flex-col gap-4">
      {links.length > 0 ? (
        links.map((link, index) => (
          <li key={index} className="group">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white transition duration-300 group"
            >
              <div className="text-white text-xl">{link.icon}</div>
              <span
                className="text-lg text-gray-800 tracking-wider bg-white absolute left-0 top-1/2 -translate-y-1/2 w-0 h-12 flex items-center rounded-[2rem] pl-12 -z-10 group-hover:w-40 transition-all overflow-hidden"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
              >
                {link.title}
              </span>
            </a>
          </li>
        ))
      ) : (
        <li className="text-base font-normal">No links available</li>
      )}
    </ul>
  );
}

export default AsideComponents;
