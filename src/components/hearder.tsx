"use client";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { Button } from "./ui/button";
import { LanguageToggle } from "./linguage-toggle";

export const Header = () => {
  return (
    <header className="flex bg-gradient-to-b from-[#1a143d] to-[#222067]">
      <div className="flex items-center justify-end h-24 w-[60%]">
        <Button className="mr-2" variant="custom">
          <HomeIcon />
        </Button>
        <Button className="mr-2" variant="custom">
          <WorkIcon />
        </Button>
        <Button className="mr-2" variant="custom">
          <EmailIcon />
        </Button>
        <Button variant="custom">
          <AutoStoriesIcon />
        </Button>
      </div>
      <LanguageToggle />
    </header>
  );
};
