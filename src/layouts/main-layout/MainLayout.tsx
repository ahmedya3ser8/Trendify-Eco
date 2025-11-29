import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer, Header } from "@components/layout";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default MainLayout;
