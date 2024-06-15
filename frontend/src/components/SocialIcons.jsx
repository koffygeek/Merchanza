import React from "react";
import { Link } from "react-router-dom";
import {
  RiDribbbleFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 pr-4">
      <Link to={""}>
        <RiYoutubeFill className="text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
      <Link to={""}>
        <RiInstagramFill className="text-[#f08a5d] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
      <Link to={""}>
        <RiTwitterFill className="text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
      <Link to={""}>
        <RiLinkedinFill className="text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
      <Link to={""}>
        <RiDribbbleFill className="text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
      <Link to={""}>
        <RiGithubFill className="text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration-500" />
      </Link>
    </div>
  );
};

export default SocialIcons;
