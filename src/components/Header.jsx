import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-800 text-white text-center fixed w-full text-xs h-15 m-0">
      <h1>Supabase</h1>
    </div>
  );
}

export default Header;
