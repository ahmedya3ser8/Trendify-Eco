import { Outlet } from "react-router-dom";

import { Footer, Header } from "@components/layout";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;
