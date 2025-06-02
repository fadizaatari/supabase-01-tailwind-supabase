import Header from "./Header";

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

import React, { useState } from "react";

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
        <button className="w-full mt-4 bg-blue-400 text-white rounded-md h-13 hover:bg-blue-700">
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
      <p className="bg-black text-white text-sm h-full">Loading data...</p>
    </div>
  );
};

export const ErrorFetchingData = (error) => {
  return (
    <div className="flex flex-col h-screen">
      <p className="bg-black text-red-500">
        Error fetching data: {error.message}
      </p>
    </div>
  );
};

export const MyBlankPage = ({ title = "" }) => {
  return (
    <div className="bg-amber-200 h-full w-full align-middle items-center justify-center flex ">
      {title && (
        <div className="bg-gray-800 p-6 rounded-md text-white h-[80%] w-[90%] flex align-middle items-center justify-center text-4xl">
          {title}
        </div>
      )}
    </div>
  );
};

export const ComponentBread = ({ smallcaption, largecaption }) => {
  return (
    <div className="bg-black h-20 flex flex-row align-middle justify-between pt-10">
      <Breadcrumb>
        <BreadcrumbList className="text-lg">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="ml-5 hover:text-white">
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
        <p className="text-white text-2xl">{largecaption}</p>
      </div>
      <div>
        <p className="text-white text-2xl mr-5"></p>
      </div>
    </div>
  );
};
