import {
  ComponentBread,
  ErrorFetchingData,
  LoadingData,
  MyBlankPage,
} from "./MyComponents.jsx";

import Header from "./Header";
import { UserAuth } from "../context/AuthContext";
import { useSupabaseData } from "./Myfunctions.js";
import * as React from "react";

import AnnouncementList from "./AnnouncementList";

const News = () => {
  const { session, signOut } = UserAuth();
  const tableName = "announcements";
  const fieldid1 = "uuid";
  const id1 = session.user.id;
  const fieldid2 = "priority";
  const id2 = "low";

  const { data, loading, error } = useSupabaseData(tableName, fieldid1, id1);

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <ErrorFetchingData error={error} />;
  }

  if (data.length > 1000) {
    return (
      <div>
        <Header />
        <MyBlankPage title="No News to Tell for the Time being. Please come back later" />
      </div>
    );
  }
  return (
    <div className="bg-red-500 flex flex-col pt-0 pl-0 pb-0 pr-0 w-screen h-screen justify-start">
      <Header />
      <ComponentBread smallcaption="News" largecaption="News" />
      <div className="flex bg-blue-500 w-full h-full p-2">
        <div className="bg-green-800 align-middle justify-center flex h-full w-full">
          {data.length > 1 ? (
            <div className="bg-gray-800 rounded-md h-[90%] w-[80%] flex flex-col overflow-x-hidden mt-5 p-5">
              {<AnnouncementList datainfo={data} />}
            </div>
          ) : (
            <MyBlankPage title="No News to Tell for the Time being. Please come back later" />
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
