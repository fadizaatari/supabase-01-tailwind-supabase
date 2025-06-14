import {
  ComponentBread,
  ComponentDivLevel1,
  ComponentDivLevel2,
  ComponentDivLevel3,
  ComponentDivLevel4,
} from "./MyComponents.jsx";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const [isBouncing, setIsBouncing] = useState(true);
  const timer = setTimeout(() => {
    setIsBouncing(false); // Set isBouncing to false to remove the class
  }, 500); // 10000 milliseconds = 10 seconds

  return (
    <ComponentDivLevel1>
      <Header />
      <ComponentBread showHome={false} showBorder={false} />
      <ComponentDivLevel2>
        <ComponentDivLevel3>
          <ComponentDivLevel4>
            <div
              className={`
                grid align-end items-end justify-center
                grid-cols-1
                ${
                  isBouncing ? "translate-x-[100%]" : ""
                }  transition-all duration-5000 `}
            >
              <h2 className="flex flex-col w-full text-4xl p-5 text-center text-white">
                <p>
                  Hello,
                  <span className="font-bold"> {session?.user?.email} </span>
                </p>
                <p className="mt-10">Welcome to the Dashboard.</p>
              </h2>
            </div>
          </ComponentDivLevel4>
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default Dashboard;
