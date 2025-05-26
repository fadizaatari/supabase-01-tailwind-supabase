import Header from "./Header";

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
    <div>
      <div>
        <Header />
        <div className=" top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
          {title && (
            <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
