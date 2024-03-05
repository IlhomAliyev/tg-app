import { Outlet } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { Menu } from "./modules/Menu/Menu";
import useTelegram from "./hooks/useTelegram";
import { useEffect } from "react";

const AppLayout = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Menu />
    </div>
  );
};

export default AppLayout;
