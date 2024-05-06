import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Admin({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return (
    <div className="">
      <div
        className="relative min-h-screen bg-gradient-to-t from-muted/55 to-transparent"
        style={{ fontFamily: `sans-serif` }}
      >
        <nav className="flex gap-5 justify-between px-20 py-4 w-full shadow-lg bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3 my-auto text-2xl">
            <Link href="/">
              <ApplicationLogo className="block h-9 w-auto" />
            </Link>

            <div className="my-auto">
              <span className="font-bold">Eco</span>
              Swap
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center text-base whitespace-nowrap">
            <div className="justify-center self-stretch px-6 py-3 my-auto border-2 border-solid border-neutral-700 rounded-[42px] max-md:px-5">
              Kelola
            </div>
            <div className="self-stretch my-auto">Katalog</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&"
              className="shrink-0 self-stretch w-16 aspect-square rounded-full"
            />
            <div>
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                    >
                      {user.name}

                      <svg
                        className="ms-2 -me-0.5 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>
                    Profile
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("logout")}
                    method="post"
                    as="button"
                  >
                    Log Out
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <main className="">{children}</main>
      </div>
    </div>
  );
}
