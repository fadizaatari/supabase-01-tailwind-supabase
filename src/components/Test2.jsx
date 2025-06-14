import React, { useState, useEffect } from "react";

export default function Test2() {
  return (
    <div class="h-96 overflow-y-scroll">
      <div class="p-4 bg-blue-200">Scroll down to see the sticky header.</div>

      <div class="sticky top-0 bg-red-500 text-white p-4 z-10">
        This is a sticky header!
      </div>

      <div class="h-[1000px] bg-gray-100 p-4">
        <p>Lots of scrollable content here...</p>
        <p>Keep scrolling...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
      </div>
    </div>
  );
}
