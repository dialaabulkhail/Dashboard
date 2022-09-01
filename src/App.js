import { BrowserRouter, Route, Routes } from "react-router-dom";
// from components
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";

// from pages
import {
  Home,
  Orders,
  Planner,
  Charts,
  Calendar,
  Editor,
  Employees,
} from "./pages";

import "./App.css";
import { useState } from "react";

function App() {
  const [SideMenu, setSideMenu] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-bg-dark">
          {/* side main menu */}
          {SideMenu ? (
            <div
              id="sidemenu"
              className="w-[260px] dark:bg-second-bg-dark fixed shadow-md rounded-md "
            >
              <Sidebar SideMenu={SideMenu} setSideMenu={setSideMenu} />
            </div>
          ) : (
            <div className="w-0 dark:bg-second-bg-dark" id="sidemenu"></div>
          )}

          {/* main screen */}
          <div
            className={`dark:bg-main-bg-dark bg-main-bg w-full min-h-screen ${
              SideMenu ? "ml-[260px]" : "flex-2"
            }`}
          >
            {/* navbar */}

            <div className="fixed w-full md:static dark:bg-main-bg-dark navbar bg-main-bg ">
              <Navbar SideMenu={SideMenu} setSideMenu={setSideMenu} />
            </div>

            {/* routing -> A container for a nested tree of elements that renders the branch that best matches the current location. */}
            <div>
              <Routes>
                {/* main dashboard */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/charts" element={<Charts />} />

                {/* Apps */}
                <Route path="/editor" element={<Editor />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
