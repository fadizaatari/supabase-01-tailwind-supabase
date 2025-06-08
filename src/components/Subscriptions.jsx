import { FaCircleInfo } from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
  ComponentDivLevel4,
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
            <ComponentDivLevel4>
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
                      to={"/subscriptions/" + item.seq}
                      hidden={getStatus(item.status)}
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
                        <div className="flex flex-row w-full">
                          <div className="w-full flex  align-middle justify-center">
                            <p className="text-xl font-bold text-center mb-2">
                              {item.type}
                            </p>
                          </div>
                          <div className="w-1/7 flex min-h-full align-top justify-end items-end pr-2">
                            <DrawerDemo item={item} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </ComponentDivLevel4>
          ) : (
            <ComponentBlankPage title="Ummmm. It seems you don't have any Subscriptions attached to this Account" />
          )}
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default Subscriptions;

const DrawerDemo = ({ item }) => {
  const styleLabel = "font-bold text-right pr-2";
  const styleField = "text-left uppercase pl-2";
  const handleButtonClick = (event) => {
    event.preventDefault(); // Stop the click event from bubbling up to the div
  };
  return (
    <button onClick={handleButtonClick}>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="text-black">
            <FaCircleInfo size={25} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-80 max-h-100">
          <div className="flex flex-col h-full w-full landscape:flex-row  align-middle items-center justify-center bg-blue-500 p-5">
            <DrawerHeader className="bg-red-500 w-full h-full">
              <DrawerTitle>Subscription Details</DrawerTitle>
              <DrawerDescription>
                You can find all the details here below
              </DrawerDescription>
              <div>
                <div
                  className="border-1 dark:border-white border-black
                grid grid-cols-2 align-middle justify-center items-center
              
               dark:hover:bg-MyGray hover:bg-MyGray hover:text-white
               dark:bg-black dark:text-white
              bg-white text-black rounded-md
              h-full
              "
                >
                  <p className={styleLabel}>Id:</p>
                  <p className={styleField}>{item.id}</p>
                  <p className={styleLabel}>Sequence:</p>
                  <p className={styleField}>{item.seq}</p>
                  <p className={styleLabel}>Description:</p>
                  <p className={styleField}>{item.address}</p>
                  <p className={styleLabel}>Size:</p>
                  <p className={styleField}>{item.size}</p>
                  <p className={styleLabel}>Type:</p>
                  <p className={styleField}>{item.type}</p>
                  <p className={styleLabel}>Status:</p>
                  <p className={styleField}>{item.status}</p>
                </div>
              </div>
            </DrawerHeader>
            <DrawerFooter className="grid grid-cols-1 bg-red-950 w-full h-full align-middle justify-center items-center">
              <div className="flex flex-col w-full h-full align-bottom items-center justify-center">
                <DrawerClose asChild>
                  <button
                    className="bg-white text-black rounded-md cursor-pointer
                 border-1 border-black dark:border-white 
                 dark:text-white dark:bg-background
                 dark:hover:bg-MyGray dark:hover:text-white
                 hover:bg-MyGray hover:text-white
                 w-full h-[70%]
                 "
                  >
                    Exit
                  </button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </button>
  );
};
