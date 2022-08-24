import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, Footer, ThemeSettings } from './components'



import "./App.css";

function App() {
  const MainMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg-dark">
          <div className="fixed right-4 bottom-4">

            {/* settings icon */}
            <TooltipComponent>
              <button
                type="button"
                className="text-xl p-2 hover:scale-105 text-white rounded-full"
                style={{
                  background: "black",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>


          {/* side main menu */}
          {MainMenu ? (
            <div className="w-[260px] dark:bg-second-bg-dark fixed shadow-md rounded-md ">
             <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-second-bg-dark"></div>
          )}

          {/* main screen */}
          <div
            className={`dark:bg-main-bg-dark bg-main-bg w-full min-h-screen ${
              MainMenu ? "ml-[260px]" : "flex-2"
            }`}

            
          >

            {/* navbar */}

            <div className="fixed md:static bg-main-bg dark:bg-main-bg-dark navbar w-full">
              <Navbar />
            </div>
          </div>

            {/* routing -> A container for a nested tree of elements that renders the branch that best matches the current location. */}
            <div>
              <Routes>
                {/* main dashboard */}
                <Route path="/" element="Home"/>
                <Route path="/home" element="Home"/>

              {/* pages */}
                <Route path="/orders" element="Orders"/>
                <Route path="/employees" element="Employees"/>
                <Route path="/customers" element="Customers"/>

                {/* Apps */}
                <Route path="/kanban" element="Kanban"/>
                <Route path="/editor" element="Editor"/>
                <Route path="/calender" element="Calender"/>
                <Route path="/color-picker" element="ColorPicker"/>

                {/* Charts */}
                <Route path="/line" element="Line"/>
                <Route path="/area" element="Area"/>
                <Route path="/bar" element="Bar"/>
                <Route path="/pie" element="Pie"/>
                <Route path="/financial" element="Financial"/>
                <Route path="/color-mapping" element="ColorMapping"/>
                <Route path="/pyramid" element="Pyramid"/>
                <Route path="/stacked" element="Stacked"/>
              </Routes>
            </div>

        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
