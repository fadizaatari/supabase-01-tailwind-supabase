import {
  ErrorFetchingData,
  LoadingData,
  ComponentBlankPage,
  ComponentBread,
  ComponentDivLevel1,
  ComponentDivLevel2,
  ComponentDivLevel3,
  ComponentDivLevel4,
} from "./MyComponents.jsx";

import Header from "./Header";
import { UserAuth } from "../context/AuthContext";
import { useSupabaseData } from "./Myfunctions.js";
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

  return (
    <ComponentDivLevel1>
      <Header />
      <ComponentBread smallcaption="News" largecaption="News" />
      <ComponentDivLevel2>
        <ComponentDivLevel3>
          {data.length > 0 ? (
            <ComponentDivLevel4>
              {<AnnouncementList datainfo={data} />}
            </ComponentDivLevel4>
          ) : (
            <ComponentBlankPage title="No News to Tell for the Time being. Please come back later" />
          )}
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default News;
