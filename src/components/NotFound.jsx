import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Header from "./Header";

import {
  ComponentBread,
  ComponentDivLevel1,
  ComponentDivLevel2,
  ComponentDivLevel3,
  ComponentDivLevel4,
} from "./MyComponents.jsx";

import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathAfterFirstSlash = pathSegments.join("/");
  return (
    <ComponentDivLevel1>
      <Header showMenu={false} />
      <ComponentBread showBorder={false} showHome={false} />
      <ComponentDivLevel2>
        <ComponentDivLevel3>
          <ComponentDivLevel4>
            <div className="align-middle justify-items items-center h-full shrink-0">
              <div className="flex w-full h-1/3">
                <p className="text-red-500 whitespace-pre-line p-2 font-bold text-3xl">
                  OOPS. 🤷‍♀️
                </p>
              </div>

              <div className="flex flex-col h-1/3 w-full align-middle justify-center">
                <p
                  className="text-white font-bold 
           text-3xl 2xl:text-6xl xl:text-4xl md:text-4xl sm:text-2xl"
                >
                  It seems the Page you are looking for is not Found
                </p>

                <div className="flex flex-row gap-4 align-middle items-end">
                  <p
                    className="text-white font-bold 
           text-3xl 2xl:text-6xl xl:text-4xl md:text-4xl sm:text-2xl"
                  >
                    Please check the URL or go back
                  </p>
                  <Link to="/" className="text-green-500 hover:text-green-700">
                    <FaHome size={50} />
                  </Link>
                </div>
              </div>

              <div className="text-red-500 flex justify-end items-center h-1/3 ">
                <p className="whitespace-pre-line pb-2 font-bold text-4xl italic p-2">
                  {pathAfterFirstSlash.toLowerCase()}
                </p>
              </div>
            </div>
          </ComponentDivLevel4>
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default NotFound;
