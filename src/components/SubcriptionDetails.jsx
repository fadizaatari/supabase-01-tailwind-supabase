import { MyButtonGreen, MyButtonAlertDialog } from "../components/MyComponents";
import { SubscriptionStatus } from "./Myfunctions.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

import React, { useState } from "react";

import { UserAuth } from "../context/AuthContext";

import { useSupabaseData } from "./Myfunctions.js";
import {
  ErrorFetchingData,
  LoadingData,
  ComponentBlankPage,
} from "./MyComponents.jsx";

const SubcriptionDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/subscriptions");
  };

  const { SubscriptionId } = useParams();
  const isNumeric1 = Number.isFinite(Number(SubscriptionId));

  if (!isNumeric1) {
    return <ComponentBlankPage title="Sorry. Subscription is not available" />;
  }

  const { session, signOut } = UserAuth();

  const tableName = "subscriptions";
  const id1 = session.user.id;
  const id2 = SubscriptionId;
  const fieldid1 = "userid";
  const fieldid2 = "seq";

  const { data, loading, error } = useSupabaseData(
    tableName,
    fieldid1,
    id1,
    fieldid2,
    id2
  );

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
            <div className="bg-blue-950 text-white">
              <p>{SubscriptionId}</p>
            </div>
            <div className="bg-blue-950 text-white">
              <p>{data[0].address}</p>
            </div>

            <div className={`${SubscriptionStatus(data[0].status)}`}>
              <p className="uppercase">{data[0].type}</p>
            </div>

            <MyButtonGreen
              onClick={handleGoBack}
              caption="Go Back"
            ></MyButtonGreen>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <ComponentBlankPage title="Ummmm. It seems you don't have any Subscriptions attached to this Account" />
    );
  }
};

export default SubcriptionDetails;
