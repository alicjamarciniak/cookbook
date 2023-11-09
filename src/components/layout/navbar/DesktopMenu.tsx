import { UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";
import { FilledButton, OutlinedButton } from "@/components";
import { showWorkInProgressToast } from "@/services/toasts";

type DesktopMenuProps = {
  transparent?: boolean;
};

const DesktopMenu: FC<DesktopMenuProps> = ({ transparent }) => {
  return (
    <div className="flex flex-row h-fit items-center gap-2">
      <Link href="/search">
        <FilledButton
          {...(transparent && {
            textColor: "dark-orange",
            bgColor: "dark-white",
          })}
          size="sm"
        >
          Search recipes
        </FilledButton>
      </Link>
      <OutlinedButton
        onClick={showWorkInProgressToast}
        size="sm"
        className="flex items-center"
        {...(transparent && {
          color: "dark-white",
        })}
      >
        <UserCircleIcon height="1rem" />
        Sign in
      </OutlinedButton>
      <OutlinedButton
        onClick={showWorkInProgressToast}
        size="sm"
        className="flex items-center"
        {...(transparent && {
          color: "dark-white",
        })}
      >
        <UserPlusIcon height="1rem" />
        Sign up
      </OutlinedButton>
    </div>
  );
};

export default DesktopMenu;
