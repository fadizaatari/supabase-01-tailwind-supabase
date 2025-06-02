import { Checkbox } from "@/components/ui/checkbox";
import { SubscriptionStatus } from "./Myfunctions.js";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header.jsx";

import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext.jsx";
import { useSupabaseData } from "./Myfunctions.js";

import {
  ErrorFetchingData,
  LoadingData,
  ComponentBlankPage,
  ComponentBread,
  ComponentDivLevel1,
  ComponentDivLevel2,
  ComponentDivLevel3,
} from "./MyComponents.jsx";

const Subscriptions = () => {
  const [showStatusPaid, setStatusPaid] = useState(true);
  const [showStatusUnpaid, setStatusUnpaid] = useState(true);
  const [showStatusStopped, setStatusStopped] = useState(false);

  const getStatus = (Value) => {
    let visible = false;
    if (showStatusPaid && Value === "paid") {
      visible = true;
    }
    if (showStatusUnpaid && Value === "unpaid") {
      visible = true;
    }
    if (showStatusStopped && Value === "stopped") {
      visible = true;
    }
    return !visible;
  };

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

  return (
    <ComponentDivLevel1>
      <Header />
      <ComponentBread
        smallcaption="Subscriptions"
        largecaption="My Subscriptions"
      />
      <ComponentDivLevel2>
        <ComponentDivLevel3>
          {data.length > 0 ? (
            <div className="bg-gray-800 rounded-md h-[90%] w-[80%] flex flex-col overflow-x-hidden mt-5 p-5">
              <div className="w-full h-10 m-0 py-1 px-6 flex items-center justify-between rounded bg-black">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={showStatusPaid}
                    onCheckedChange={setStatusPaid}
                    id="cbpaid"
                  />
                  <label
                    htmlFor="cbpaid"
                    className="bg-black font-medium text-white p-2"
                  >
                    Paid
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={showStatusUnpaid}
                    onCheckedChange={setStatusUnpaid}
                    id="cbunpaid"
                  />
                  <label
                    htmlFor="cbunpaid"
                    className="bg-black font-medium text-white p-2"
                  >
                    Unpaid
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={showStatusStopped}
                    onCheckedChange={setStatusStopped}
                    id="cbstopped"
                  />
                  <label
                    htmlFor="cbstopped"
                    className="bg-black font-medium text-white p-2"
                  >
                    Stopped
                  </label>
                </div>
              </div>
              {(showStatusPaid || showStatusUnpaid || showStatusStopped) && (
                <div className="xl:bg-blue-950 lg:bg-green-500 md:bg-red-200 sm:bg-blue-200 bg-yellow-250 rounded-md text-white grid-cols-1 sm:flex-row sm-flex-wrap sm:grid-cols-2  md:flex-wrap md:grid-cols-3  flex-wrap xl:grid-cols-2 lg:flex-wrap grid lg:grid-cols-3 gap-2 justify-center p-3">
                  {data.map((item) => (
                    <Link
                      hidden={getStatus(item.status)}
                      to={"/subscriptions/" + item.seq}
                    >
                      <div
                        className={`rounded text-black w-full justify-center items-center flex flex-col  ${SubscriptionStatus(
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
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <ComponentBlankPage title="Ummmm. It seems you don't have any Subscriptions attached to this Account" />
          )}
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default Subscriptions;
