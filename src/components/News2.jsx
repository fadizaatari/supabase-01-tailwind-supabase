import Header from "./Header";

import AnnouncementList from "./AnnouncementList";

const News2 = () => {
  return (
    <div>
      <Header />
      <div
        className="top-0 left-0 w-full h-screen
          2xl:p-10
          xl:p-10
          md:p-10
          sm:p-10
          p-10
          max-w-screen
          max-h-screen
        flex justify-center align-middle items-center bg-black text-white text-lg flex-col"
      >
        <AnnouncementList />
      </div>
    </div>
  );
};

export default News2;
