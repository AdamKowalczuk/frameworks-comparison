import Home from "../assets/icons/home.svg";
import Explore from "../assets/icons/wallpaper.svg";
import People from "../assets/icons/people.svg";
import Saved from "../assets/icons/bookmark.svg";
import CreatePost from "../assets/icons/gallery-add.svg";

export const sidebarLinks = [
  {
    imgURL: Home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: Explore,
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: People,
    route: "/all-users",
    label: "People",
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
