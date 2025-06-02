import {
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

  if (data.length === 0) {
    return (
      <div>
        <Header />
        <MyBlankPage title="No News to Tell for the Time being. Please come back later" />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="w-screen flex flex-col justify-center align-center items-center overflow-hidden bg-black mx-auto h-screen position:sticky">
        <div className="bg-gray-800 rounded-md h-[85%] w-[90%] grid grid-cols-1 overflow-x-hidden p-2">
          <AnnouncementList datainfo={data} />
        </div>
      </div>
    </div>
  );
};

export default News;
