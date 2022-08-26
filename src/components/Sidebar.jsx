import React from "react";

//  to allow us switch between pages
import { Link, NavLink } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { links } from "../data/dummy";


const Sidebar = ({ SideMenu, setSideMenu }) => {
  return (  
    <div className="h-screen pb-10 ml-4 ">
      {SideMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => {}}
              className="mt-4 text-lg font-bold tracking-widest dark:text-white"
            >
              Dashboard
            </Link>
            <button
              id="closebutton"
              type="button"
              className="mt-4 mr-3 rounded-full shadow-md hover:scale-105"
              onClick={() => setSideMenu(false)}
            >
              <VscClose size={20} />
            </button>
          </div>
          <hr className="w-56 mt-2 text-black" />

          {/* list items */}
          <div className="mt-6 ">
            {links.map((item) => (
              <>
                <div key={item.title} className="py-3 text-black uppercase">
                  {item.title}
                </div>

                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    
                  >
                    <h1 className="rounded cursor-pointer hover:shadow-sm max-w-[200px] ease-in-out duration-200  text-gray-600 p-2 flex shadow-black">
                      <span className="px-3 pt-1">{link.icon} </span> {link.name}
                    </h1>
                  </NavLink>
                ))}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
