import Image from "next/image";
import { Inter } from "next/font/google";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import React from "react";
import { BiHash, BiHomeCircle, BiSolidHome, BiUser } from "react-icons/bi";
const inter = Inter({ subsets: ["latin"] });

interface TwitterSideButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideButton[] = [
  {
    title: "Home",
    icon: <BiSolidHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Message",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className=" grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-1">
          <div className=" h-fit w-fit text-3xl p-3 transition-all hover:bg-gray-900   hover:cursor-pointer  rounded-full">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-xl  w-fit pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-900 cursor-pointer rounded-full px-5 py-2 mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] hover:cursor-pointer hover:opacity-95 w-full mt-5 py-2 px-1 rounded-full mx-4 font-semibold">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-white"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
