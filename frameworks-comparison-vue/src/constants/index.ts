import Home from "@/assets/icons/home.svg";
import People from "@/assets/icons/people.svg";
import Saved from "../assets/icons/bookmark.svg";
import CreatePost from "@/assets/icons/gallery-add.svg";

export const sidebarLinks = [
  {
    imgURL: Home,
    route: "/home",
    label: "Home",
  },
  {
    imgURL: People,
    route: "/all-users",
    label: "Users",
  },
  {
    imgURL: Saved,
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: CreatePost,
    route: "/create-post",
    label: "Create Post",
  },
];
