import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Footer";

function AppLayout() {
      const location = useLocation();
    return (
      <div className="  ">
       

        <main className="  overflow-x-hidden">
          <Outlet key={location.pathname} />
        </main>

        <Footer />
      </div>
    );
}

export default AppLayout
