import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleDarkModeToggle = () => {
    // Change the current theme
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="m-4 shadow-md rounded-3xl">
      <div className="navbar bg-base-100 rounded-3xl">
        <div className="flex-none">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-max"
            >
              <li>
                <Link
                  to={"/"}
                  className="tooltip tooltip-right"
                  data-tip="Home"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"/onbus"}
                  className="tooltip tooltip-right"
                  data-tip="Students On Bus"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M21.004 7.975V6c0-2.206-1.794-4-4-4h-10c-2.206 0-4 1.794-4 4v1.998l-.076.004A1 1 0 002 9v2a1 1 0 001 1h.004v6c0 .735.403 1.372.996 1.72V21a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-1.276A1.994 1.994 0 0021.004 18v-6a1 1 0 001-1V9.062a1.006 1.006 0 00-.072-.455c-.203-.487-.635-.604-.928-.632zM19.006 18H5.004v-5h14.001l.001 5zM11.004 7v4h-6V7h6zm8 0v4h-6V7h6zm-12-3h10c.736 0 1.375.405 1.722 1H5.282c.347-.595.986-1 1.722-1z" />
                    <path d="M9 15.5 A1.5 1.5 0 0 1 7.5 17 A1.5 1.5 0 0 1 6 15.5 A1.5 1.5 0 0 1 9 15.5 z" />
                    <path d="M18 15.5 A1.5 1.5 0 0 1 16.5 17 A1.5 1.5 0 0 1 15 15.5 A1.5 1.5 0 0 1 18 15.5 z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"/testing"}
                  className="tooltip tooltip-right"
                  data-tip="Live"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fill="currentColor"
                      d="M12.98 21.953a10.12 10.12 0 01-1.96 0l.193-1.991a8.1 8.1 0 001.574 0l.193 1.99zM9.096 21.572l.58-1.914a7.947 7.947 0 01-1.446-.6l-.945 1.763c.573.307 1.179.56 1.811.75zM5.656 19.73l1.27-1.545a8.062 8.062 0 01-1.111-1.11L4.27 18.343c.415.506.88.97 1.386 1.386zM3.179 16.715l1.763-.944a7.938 7.938 0 01-.6-1.447l-1.914.58c.192.632.444 1.238.751 1.81zM2.047 12.98l1.991-.193a8.12 8.12 0 010-1.574l-1.99-.193a10.123 10.123 0 000 1.96zM2.428 9.096l1.914.58c.153-.505.355-.989.6-1.446l-1.763-.945a9.938 9.938 0 00-.75 1.811zM4.27 5.656l1.545 1.27a8.06 8.06 0 011.11-1.111L5.657 4.27c-.506.415-.97.88-1.386 1.386zM7.285 3.179l.945 1.763a7.938 7.938 0 011.446-.6l-.58-1.914a9.938 9.938 0 00-1.81.751zM11.02 2.047a10.123 10.123 0 011.96 0l-.193 1.991a8.12 8.12 0 00-1.574 0l-.193-1.99zM14.904 2.428l-.58 1.914c.505.153.989.355 1.447.6l.944-1.763a9.936 9.936 0 00-1.811-.75zM18.344 4.27l-1.27 1.545c.406.333.778.705 1.111 1.11l1.545-1.269a10.06 10.06 0 00-1.386-1.386zM20.821 7.285l-1.763.945c.245.457.447.941.6 1.446l1.914-.58a9.937 9.937 0 00-.751-1.81zM21.953 11.02l-1.991.193a8.1 8.1 0 010 1.574l1.99.194a10.123 10.123 0 000-1.961zM21.572 14.904l-1.914-.58a7.947 7.947 0 01-.6 1.447l1.763.944c.307-.573.56-1.179.75-1.811zM19.73 18.344l-1.545-1.27a8.063 8.063 0 01-1.11 1.111l1.269 1.545c.506-.415.97-.88 1.386-1.386zM16.715 20.821l-.944-1.763a7.947 7.947 0 01-1.447.6l.58 1.914a9.935 9.935 0 001.81-.751z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9 12a3 3 0 116 0 3 3 0 01-6 0zm3 1a1 1 0 110-2 1 1 0 010 2z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 6a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 108 0 4 4 0 00-8 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl hidden sm:flex"
          >
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://upload.wikimedia.org/wikipedia/en/7/74/Deakin_University_Logo_2017.svg"
              />
            </div>
            School Bus Monitoring System
          </Link>
        </div>

        {auth.currentUser ? (
          <div className="flex-none gap-2 mr-4">
            {/* <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 sm:w-auto rounded-3xl"
              />
            </div> */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    src={
                      auth.currentUser.photoURL
                        ? auth.currentUser.photoURL
                        : "https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-max"
              >
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <li>
                  <div
                    className="justify-between"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Profile
                  </div>
                </li>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Your Profile</h3>
                    <div className="py-4">
                      {/* Here is the profile Card */}
                      <div class="flex items-center h-1/2 w-full justify-center">
                        <div class="max-w-xs">
                          <div class="bg-white shadow-xl rounded-lg py-3">
                            <div class="photo-wrapper p-2">
                              <img
                                class="w-32 h-32 rounded-full mx-auto"
                                src={auth.currentUser.photoURL}
                                alt="John Doe"
                              />
                            </div>
                            <div class="p-2">
                              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                                {auth.currentUser.displayName}
                              </h3>
                              <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Software Engineer</p>
                              </div>
                              <table class="text-xs my-3">
                                <tbody>
                                  <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">
                                      Address
                                    </td>
                                    <td class="px-2 py-2">
                                      Chatakpur-3, Dhangadhi Kailali
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">
                                      Phone
                                    </td>
                                    <td class="px-2 py-2">+977 9955221114</td>
                                  </tr>
                                  <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">
                                      Email
                                    </td>
                                    <td class="px-2 py-2">
                                      {auth.currentUser.email}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              {/* 
                              <div class="text-center my-3">
                                <a
                                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                                  href="#"
                                >
                                  View Profile
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <Link onClick={() => signOut(auth)}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Link to={"/register"}>
              <button className="btn mr-4 rounded-3xl">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn mr-4 rounded-3xl">Login</button>
            </Link>
          </div>
        )}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={handleDarkModeToggle} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
