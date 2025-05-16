import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathAfterFirstSlash = pathSegments.join("/");
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 rounded-md shadow-md">
        <p className="text-red-500 whitespace-pre-line pb-2 font-bold text-3xl">
          {`OOPS. 🤷‍♀️
          `}
        </p>
        <p className="text-white whitespace-pre-line pb-2 font-bold text-3xl">
          {`
          It seems the Page you are looking for is not Found
          Please check the URL or go back to the homepage.`}
        </p>
        <p className="text-red-500 whitespace-pre-line pb-2 font-bold text-1xl mt-10 italic">
          {pathAfterFirstSlash.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
