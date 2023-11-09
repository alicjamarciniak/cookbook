
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Burger, Menu as MMenu } from "@mantine/core";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";
import { showWorkInProgressToast } from "@/services/toasts";
import tailwindConfig from "../../../../tailwind.config.js";

const Menu = () => {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <div>
      <MMenu shadow="md" width="100%">
        <MMenu.Target>
          <Burger
            aria-label="Toggle navigation"
            size="sm"
            color={fullConfig.theme?.colors?.orange as string}
          />
        </MMenu.Target>
        <MMenu.Dropdown py={20}>
          <MMenu.Item
            leftSection={
              <MagnifyingGlassIcon className="text-dark-gray" height="1rem" />
            }
          >
            <Link href="/search">
              <span className="font-bold">Search recipes</span>
            </Link>
          </MMenu.Item>
          <MMenu.Divider />
          <MMenu.Label>Profile</MMenu.Label>
          <MMenu.Item
            leftSection={
              <UserCircleIcon className="text-dark-gray" height="1rem" />
            }
          >
            <a onClick={showWorkInProgressToast}>Sign in</a>
          </MMenu.Item>
          <MMenu.Item
            leftSection={
              <UserPlusIcon className="text-dark-gray" height="1rem" />
            }
          >
            <a onClick={showWorkInProgressToast}>Sign up</a>
          </MMenu.Item>
        </MMenu.Dropdown>
      </MMenu>
    </div>
  );
};

export default Menu;
