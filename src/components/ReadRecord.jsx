import Header from "./Header";

import { UserAuth } from "../context/AuthContext";

import { people } from "./data.js";
import { useSupabaseData } from "./Myfunctions.js";
import {
  ErrorFetchingData,
  LoadingData,
  MyBlankPage,
} from "./MyComponents.jsx";

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
        <div>
          <Header />
          <div className=" top-0 left-0 h-screen w-screen flex justify-center items-center bg-black text-white rounded-md text-lg ">
            <div className=" bg-gray-800 rounded-md text-white flex sm:flex-row md:flex-wrap flex-wrap lg:flex-wrap gap-3 justify-center p-3">
              {data.map((item) => (
                <div className="rounded bg-white text-black w-50 justify-center  items-center flex flex-col gap-2">
                  <p
                    key={item.id}
                    className="text-sm font-semibold text-center mb-3 uppercase"
                  >
                    {item.address}
                  </p>
                  <p className="text-sm font-bold text-center mb-2">
                    {item.size}
                  </p>

                  <p
                    className={`"text-sm text-center mb-2 ${
                      item.type === "FIXED"
                        ? "text-red-500 font-black"
                        : "text-green-800 font-black"
                    }"`}
                  >
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
