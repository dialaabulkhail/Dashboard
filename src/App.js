import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

// from components
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";

// from pages
import {
  Home,
  Orders,
  Calendar,
  Customers,
  ColorPicker,
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
          <div className="fixed right-4 bottom-4">
            {/* settings icon */}
            <button
              type="button"
              className="p-2 text-xl text-white rounded-full hover:scale-105"
              style={{
                background: "gray",
              }}
            >
              <IoSettingsOutline />
            </button>
          </div>

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

            <div className="fixed w-full md:static bg-main-bg dark:bg-main-bg-dark navbar">
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
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              {/* <Route path="/kanban" element="Kanban"/> */}
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              {/* <Route path="/line" element="Line"/>
                <Route path="/area" element="Area"/>
                <Route path="/bar" element="Bar"/>
                <Route path="/pie" element="Pie"/>
                <Route path="/financial" element="Financial"/>
                <Route path="/color-mapping" element="ColorMapping"/>
                <Route path="/pyramid" element="Pyramid"/>
                <Route path="/stacked" element="Stacked"/> */}
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
