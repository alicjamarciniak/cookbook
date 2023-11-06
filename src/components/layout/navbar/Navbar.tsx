"use client";

import { FC } from "react";
import { useHeadroom } from "@mantine/hooks";
import CollapsedNavbar from "./CollapsedNavbar";
import useDevices from "@/hooks/useDevices";
import FullNavbar from "./FullNavbar";

type NavbarProps = {
  dark?: boolean;
  transparent?: boolean;
};

const Navbar: FC<NavbarProps> = ({ dark = false, transparent = false }) => {
  const { isMobile } = useDevices();
  const isCollapsed = useHeadroom({ fixedAt: 10 });

  return (
    <nav>
      {isMobile && !transparent ? (
        <CollapsedNavbar isMobile={isMobile} />
      ) : (
        <>
          <FullNavbar
            dark={dark}
            transparent={transparent}
            isMobile={isMobile}
          />
          <CollapsedNavbar
            isMobile={isMobile}
            style={{
              transform: `translate3d(0, ${isCollapsed ? "-12vh" : 0}, 0)`,
            }}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
