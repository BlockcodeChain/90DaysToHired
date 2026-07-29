import logo from "../assest/Property Rental Website Using React/p.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      {/* Nav 1 */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Placeo Logo"
            className="h-14 w-14 md:h-16 md:w-16 object-contain"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-red-500">
            Placeo
          </h1>
        </div>

        {/* Search */}
        <div className="order-3 w-full md:order-0 md:w-auto">
          <div className="flex flex-col gap-2 sm:flex-row">

            <input
              type="text"
              placeholder="Search Destination"
              className="
                h-11
                w-full
                rounded-full
                border
                border-gray-300
                px-5
                outline-none
                transition
                sm:w-64
                md:w-72
                focus:border-red-500
                focus:ring-2
                focus:ring-red-300
              "
            />

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-red-500
                px-5
                py-2.5
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-red-600
                active:scale-95
              "
            >
              <IoIosSearch className="text-lg" />
              Search
            </button>

          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button
            type="button"
            className="
              hidden
              rounded-full
              px-3
              py-2
              text-sm
              font-medium
              transition
              hover:bg-gray-100
              lg:block
            "
          >
            List Your Home
          </button>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-gray-300
              px-4
              py-2
              shadow-sm
            "
          >
            <button
              type="button"
              aria-label="Menu"
              className="text-xl transition hover:text-red-500"
            >
              <RxHamburgerMenu />
            </button>

            <button
              type="button"
              aria-label="Profile"
              className="text-xl transition hover:text-red-500"
            >
              <FaRegCircleUser />
            </button>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto h-px w-[98%] bg-gray-200"></div>

      {/* Nav 2 */}
      <div className="flex h-16 items-center justify-center bg-white">
        {/* Categories */}
      </div>
    </nav>
  );
};

export default Nav;