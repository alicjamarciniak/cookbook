import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import DesktopMenu from "./DesktopMenu";

type FullNavbarProps = {
  dark: boolean;
  transparent: boolean;
  isMobile: boolean | undefined;
};

const FullNavbar: FC<FullNavbarProps> = ({ dark, transparent, isMobile }) => {
  return (
    <div
      className={`w-full px-[10vw] py-[10px] z-[200] ${
        transparent ? "absolute bg-transparent" : "block bg-dark-green"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <Link href="/" className="inline-block">
          <Image
            priority
            width="0"
            height="0"
            sizes="100vw"
            className={`${isMobile ? "w-[120px]" : "w-[150px]"} h-auto`}
            src="/img/cookbook-logo.png"
            alt="cookbook logo"
            {...(dark && {
              style: {
                filter: "brightness(100)",
              },
            })}
          />
        </Link>
        {!isMobile && <DesktopMenu transparent={transparent} />}
      </div>
    </div>
  );
};

export default FullNavbar;
