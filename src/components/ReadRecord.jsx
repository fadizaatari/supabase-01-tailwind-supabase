import Header from "./Header";

import { UserAuth } from "../context/AuthContext";

import { people } from "./data.js";
import { useSupabaseData } from "./Myfunctions.js";
import { ErrorFetchingData, LoadingData } from "./MyComponents.jsx";

const ReadRecord = () => {
  const { session, signOut } = UserAuth();

  const tableName = "profiles";
  const id = session.user.id;
  const { data, loading, error } = useSupabaseData(tableName, id);

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <ErrorFetchingData error={error} />;
  }

  if (data) {
    const listItems = data.map((item) => (
      <li key={item.id}>
        <p>First Name: {item.first_name}</p>
        <p>Last Name: {item.last_name}</p>
        <p>Id: {item.id}</p>
      </li>
    ));
    return (
      <div>
        <div>
          <Header />
          <div className=" top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
            <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
              <ul>{listItems}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ReadRecord;
