import Header from "./Header";

import { UserAuth } from "../context/AuthContext";

import { people } from "./data.js";
import { useSupabaseData } from "./Myfunctions.js";
import {
  ErrorFetchingData,
  LoadingData,
  MyBlankPage,
} from "./MyComponents.jsx";

function StatusDisplay(status) {
  let statusClasses = "";
  switch (status) {
    case "paid":
      statusClasses = "bg-green-300";
      break;
    case "unpaid":
      statusClasses = "bg-red-300";
      break;
    case "stopped":
      statusClasses = "bg-orange-300";
      break;
    default:
  }
  return statusClasses;
}

const ReadRecord = () => {
  const { session, signOut } = UserAuth();

  const tableName = "subscriptions";
  const id = session.user.id;
  const fieldid = "userid";
  const { data, loading, error } = useSupabaseData(tableName, fieldid, id);

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <ErrorFetchingData error={error} />;
  }

  if (data.length > 0) {
    return (
      <div>
        <div className="left-0 h-screen w-screen flex-col justify-center items-center bg-black ">
          <div>
            <Header></Header>
          </div>
          <div className="bg-black justify-center align-middle p-10">
            <div className="xl:bg-blue-950 lg:bg-green-500 md:bg-red-200 sm:bg-blue-200 bg-yellow-250 min-w-100 rounded-md text-white grid-cols-1 sm:flex-row sm-flex-wrap sm:grid-cols-2 sm:min-w-120 md:flex-wrap md:grid-cols-3 md:min-w-190 xl:min-w-290 flex-wrap xl:grid-cols-2 lg:flex-wrap grid lg:grid-cols-3 lg:min-w-290 gap-2 justify-center p-3">
              {data.map((item) => (
                <div
                  className={`rounded text-black xl:w-140 lg:w-90 md:w-60 sm:w-70 w-100 justify-center items-center flex flex-col  ${StatusDisplay(
                    item.status
                  )}`}
                >
                  <p
                    key={item.id}
                    className="text-sm font-semibold text-center mb-3 uppercase"
                  >
                    {item.address}
                  </p>
                  <p className="text-sm font-bold text-center mb-2">
                    {item.size}
                  </p>

                  <p className="text-xl font-bold text-center mb-2">
                    {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <MyBlankPage title="Ummmm. It seems you don't have any Subscriptions attached to this Account" />
    );
  }
};

export default ReadRecord;
