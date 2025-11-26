import { Outlet } from "react-router-dom";

import { Footer, Header } from "@components/layout";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;
