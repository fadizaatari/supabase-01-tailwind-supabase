import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathAfterFirstSlash = pathSegments.join("/");
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-center items-center bg-black mx-auto">
      <div className="bg-gray-800 rounded-md h-[90%] w-[90%] ">
        <p className="text-red-500 whitespace-pre-line p-2 font-bold text-3xl h-1/4">
          {`OOPS. 🤷‍♀️
          `}
        </p>

        <p
          className="text-white whitespace-pre-line p-2 font-bold h-2/4 
           overflow-auto text-3xl 2xl:text-7xl xl:text-5xl md:text-4xl sm:text-2xl"
        >
          {`
          It seems the Page you are looking for is not Found
          Please check the URL or go back to the homepage.`}
        </p>
        <p className="text-red-500 whitespace-pre-line pb-2 font-bold text-4xl italic p-2 h-1/4">
          {pathAfterFirstSlash.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
