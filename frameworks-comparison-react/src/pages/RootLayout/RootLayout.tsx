import { Outlet } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./RootLayout.scss";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <LeftSidebar />

      <Outlet />
    </div>
  );
};

export default RootLayout;
