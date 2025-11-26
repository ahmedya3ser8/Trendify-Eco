import { Outlet } from "react-router-dom";

import { Footer, Header } from "@components/layout";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;
