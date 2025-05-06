import { Toaster, toast } from "sonner";
import React, { useState } from "react";

function Test2() {
  return (
    <div className="bg-red-400 p-100">
      <Toaster position="top-right" richColors />
      <button
        className="bg-amber-200"
        onClick={() =>
          toast.error("Be at the area 10 minutes before the event time", {
            duration: 1000,
          })
        }
      >
        Give me a toast
      </button>
    </div>
  );
}

export default Test2;
