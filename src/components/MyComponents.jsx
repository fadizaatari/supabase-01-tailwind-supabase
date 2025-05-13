import { Calendar } from "@/components/ui/calendar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React, { useState } from "react";
import { Caption } from "react-day-picker";

export const MyCalendar = ({ BackColor }) => {
  const [date, setDate] = useState(new Date());
  const color =
    "pt-5 pb-2 text-2xl text-white rounded-md border border-white" +
    " " +
    BackColor;
  return (
    <div className={color}>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

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
            <p>{toolTip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
