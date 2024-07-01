import React from "react";
import {
  FaCompass,
  FaHeart,
  FaHome,
  FaRegPlusSquare,
  FaSearch,
} from "react-icons/fa";
import SideBarItem from "./SideBarItem";
import { BiMoviePlay } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Dialogs from "./_ui/Dialog";

function SideBar() {
  return (
    <div className="bg-black w-[244px] h-screen border-r border-r-gray-700">
      <div className="flex gap-5 flex-col p-6 flex-1">
        <h3 className="px-2 text-white my-5 font-bold text-xl font-Playwrite">
          BBMGRAM
        </h3>
        <div className="flex flex-col">
          <SideBarItem icon={<FaHome className="icon" />} label={"home"} />
          <SideBarItem
            link="/search"
            icon={<FaSearch className="icon" />}
            label={"Search"}
          />
          <SideBarItem
            icon={<FaCompass className="icon" />}
            label={"Explore"}
          />
          <SideBarItem
            icon={<BiMoviePlay className="icon" />}
            label={"Reels"}
          />
          <SideBarItem
            icon={<IoChatbubbleEllipses className="icon" />}
            label={"Messages"}
          />
          <SideBarItem
            icon={<FaHeart className="icon" />}
            label={"Notifications"}
          />
          <Dialogs />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
