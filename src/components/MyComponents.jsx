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
  caption = "",
  onClickOK,
  onClickCancel,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full mt-4 bg-blue-400 text-white rounded-md h-13 hover:bg-blue-700">
          {caption}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-green-200 border-0">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-500">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-blue-900">
            " Are you sure you want to delete this account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onClickCancel}
            className="text-white bg-green-600 hover:bg-green-900 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClickOK}
            className="text-white bg-red-600 hover:bg-red-900 hover:text-white"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
