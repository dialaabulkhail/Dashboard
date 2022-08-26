import React from "react";
// icons
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import {  useState } from "react";
import diala from "../data/diala.jpg";
import { Cart, Chat, Notification } from ".";

const Navbar = ({ SideMenu, setSideMenu }) => {
  const [CartClicked, setCartClicked] = useState(false);
  const [ChatClicked, setChatClicked] = useState(false);
  const [NotificationClicked, setNotificationClicked] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className="flex justify-between w-full h-15">
      <div>
        <button onClick={() => setSideMenu(true)}>
          {SideMenu ? (
            <></>
          ) : (
            <div className="relative flex justify-between px-4 mt-4">
              <AiOutlineMenu
                size={20}
                className="text-gray-500 hover:scale-105"
              />
              < AiOutlineSearch size={20} className="mx-2 text-gray-500"/>
            </div>
          )}
        </button>
      </div>
      <div className="flex justify-between gap-3 px-2 pt-2 text-gray-500">
        <AiOutlineShoppingCart
          size={20}
          className="mt-2 cursor-pointer hover:scale-105"
          onClick={() => {
            setCartClicked(!CartClicked);
            setChatClicked(false);
            setNotificationClicked(false);
            setProfile(false);
          }}
        />

        <BsChatDots
          size={20}
          className="mt-2 cursor-pointer hover:scale-105"
          onClick={() => {
            setChatClicked(!ChatClicked);
            setNotificationClicked(false);
            setCartClicked(false);
            setProfile(false);
          }}
        />
        <IoMdNotificationsOutline
          size={20}
          className="mt-2 cursor-pointer hover:scale-105"
          onClick={() => {
            setNotificationClicked(!NotificationClicked);
            setCartClicked(false);
            setChatClicked(false);
            setProfile(false);
          }}
        />
        <div className="flex items-center pb-2 mr-3">
          <img
            src={diala}
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>

        <div>
          <button
            type="button"
            className="flex justify-between mt-2 text-gray-700"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              setProfile(!profile);
              setChatClicked(false);
              setNotificationClicked(false);
              setCartClicked(false);
            }}
          >
            <p className="font-bold">Profile</p>
            <TiArrowSortedDown size="17px" className="mt-1 " />
          </button>
        </div>

        {profile && (
          <div className="absolute w-40 mt-10 bg-white rounded-md shadow-md right-2 top-4" >
            <div className="py-1" role="none">
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-bg"
              >
                My Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-bg"
              >
                Account settings
              </a>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-main-bg"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
  <div>
        {CartClicked && <Cart />}
      {ChatClicked && <Chat />}
      {NotificationClicked && <Notification />}
        </div>
      </div>
    

    </div>
  );
};

export default Navbar;
