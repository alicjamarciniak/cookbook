import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

type CollapsedNavbarProps = {
  isMobile: boolean | undefined;
  style?: CSSProperties;
};

const CollapsedNavbar: FC<CollapsedNavbarProps> = ({ isMobile, style }) => {
  return (
    <div
      className="transition-transform px-[5vw] py-[15px] md:py-[15px] z-[1000]
        bg-dark-green flex flex-row justify-between fixed top-0 right-0 left-0 shadow-inner
        md:drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)] rounded-b-sm"
      style={style}
    >
      <div>
        <Link href="/">
          <Image
            src="/img/cookbook_logo_text.png"
            alt="cookbook logo text"
            width="0"
            height="0"
            sizes="100vw"
            className={`${isMobile ? "w-[120px]" : "w-[150px]"} h-auto`}
          />
        </Link>
      </div>
      <div>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>
    </div>
  );
};

export default CollapsedNavbar;
