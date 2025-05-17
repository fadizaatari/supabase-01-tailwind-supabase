import { UserAuth } from "../context/AuthContext";

import { people } from "./data.js";
import {
  calculateArea,
  reverseString,
  useSupabaseData,
} from "./Myfunctions.js";

const ReadRecord = () => {
  const { session, signOut } = UserAuth();
  const tableName = "profiles";
  const id1 = session.user.id;
  //const recordIdToRead = "4a644683-63ec-496b-af61-a6871c000790";

  const { data, loading, error } = useSupabaseData(tableName, id1);

  if (loading) {
    return <p className="bg-white text-red-400">Loading data...</p>;
  }

  if (error) {
    return (
      <p className="bg-white text-yellow-400">
        Error fetching data: {error.message}
      </p>
    );
  }

  if (data) {
    const listItems = data.map((item) => (
      <li key={item.id}>
        <p>
          <b>{item.first_name}</b>
          {" " + item.last_name + " "}
          his id is {item.id}
        </p>
      </li>
    ));
    return <ul className="bg-amber-300">{listItems}</ul>;
  }
};

export default ReadRecord;
