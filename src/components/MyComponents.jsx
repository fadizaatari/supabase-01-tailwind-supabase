import React, { useState, useEffect } from "react";

import { FaHome } from "react-icons/fa";
import { LuSlash } from "react-icons/lu";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TestingMode = false;
let bgColorBlankPage = "dark:bg-black bg-white";
let bgColorLevel1 = "bg-black";
let bgColorLevel2 = "dark:bg-black bg-white";
let bgColorLevel3 = "dark:bg-black bg-white";
let bgColorLevel4 = "bg-gray-800";
if (TestingMode) {
  bgColorLevel1 = "bg-red-500";
  bgColorLevel2 = "bg-blue-500";
  bgColorLevel3 = "bg-green-800";
  bgColorLevel4 = "bg-gray-800";
  bgColorBlankPage = "bg-amber-200";
}

export const MyButtonGreen = ({ caption = "", onClick, toolTip = "" }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className="w-full mt-4 bg-green-600 text-white rounded-md h-13 hover:bg-green-800"
          >
            {caption}
          </button>
        </TooltipTrigger>
        {toolTip && (
          <TooltipContent>
            <div className="text-black bg-yellow-50 text-1xl p-2 m-2 rounded-md">
              {toolTip}
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export function MyButtonAlertDialog({
  buttonCaption = "",
  onClickCancel,
  onClickDialog,
  alertDialogDescription = "",
  alertCancelText = "",
  alertDialogTitle = "",
  alertDialogText = "",
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full mt-4 text-white rounded-md h-13 hover:bg-blue-700 bg-blue-900">
          {buttonCaption}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black text-2xl">
            {alertDialogTitle}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-black text-1xl mt-2">
            {alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onClickCancel}
            className="text-black bg-white hover:bg-gray-700 hover:text-white w-30 h-10 text-1xl"
          >
            {alertCancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClickDialog}
            className="text-white bg-black hover:bg-gray-700 hover:text-white w-30 h-10 text-1xl"
          >
            {alertDialogText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const LoadingData = () => {
  return (
    <div className="flex flex-col h-screen">
      <p className="dark:bg-black dark:text-white bg-white text-black text-md h-full px-5">
        Loading data...
      </p>
    </div>
  );
};

export const ErrorFetchingData = (error) => {
  return (
    <div className="flex flex-col h-screen">
      <p className="bg-black text-red-500 text-md h-full">
        Error fetching data: {error.message}
      </p>
    </div>
  );
};

export const ComponentBlankPage = ({ title = "" }) => {
  return (
    <div
      className={`h-full w-full align-middle items-center justify-center flex ${bgColorBlankPage}`}
    >
      {title && (
        <div className="dark:bg-gray-800  bg-gray-500 p-6 rounded-md text-white h-[80%] w-[90%] flex align-middle items-center justify-center text-4xl">
          {title}
        </div>
      )}
    </div>
  );
};

export const ComponentBread = ({ smallcaption, largecaption }) => {
  return (
    <div
      className="dark:bg-black bg-white h-20 flex flex-row align-middle justify-between pt-10
      
      border-black
    border-b-1
    dark:border-MyGray"
    >
      <Breadcrumb>
        <BreadcrumbList className="text-lg text-black dark:text-white">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="ml-5  ">
              <FaHome />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <LuSlash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-white">
              {smallcaption}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <p className="dark:text-white text-black text-2xl ">{largecaption}</p>
      </div>
      <div>
        <p className="text-white text-2xl mr-5"></p>
      </div>
    </div>
  );
};

export const ComponentDivLevel1 = ({ children }) => {
  return (
    <div
      className={`flex flex-col pt-0 pl-0 pb-0 pr-0 w-screen h-screen justify-start ${bgColorLevel1}`}
    >
      {children}
    </div>
  );
};

export const ComponentDivLevel2 = ({ children }) => {
  return (
    <div
      className={`flex w-full h-full p-2 
      ${bgColorLevel2}`}
    >
      {children}
    </div>
  );
};

export const ComponentDivLevel3 = ({ children }) => {
  return (
    <div
      className={`align-middle justify-center flex h-full w-full transition-transform duration-3000 ${bgColorLevel3}}`}
    >
      {children}
    </div>
  );
};

export const ComponentDivLevel4 = ({ children }) => {
  const [move, setMove] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMove(false);
    }, 0); // Start moving after 500ms
    return () => clearTimeout(timer);
  }, []);
  //${move ? "translate-x-[300px]" : "translate-x-0"}
  return (
    <div
      className={`rounded-md h-[90%] w-[80%] flex flex-col overflow-x-hidden mt-5 p-5
        transition-transform duration-500
         

         ${bgColorLevel4}`}
    >
      {children}
    </div>
  );
};
