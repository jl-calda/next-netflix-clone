import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-9  right-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <div className="w-8 h-8 relative rounded-md ">
            <Image
              src="/images/default-blue.png"
              alt="profile"
              fill
              className="rounded-md"
            />
          </div>
          <p className="text-white text-sm group:hover/item:undeline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center cursor-pointer text-white text-sm hover:underline"
        >
          Sign Out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
