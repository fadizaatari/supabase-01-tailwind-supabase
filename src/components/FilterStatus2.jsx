import { useState } from "react";
import { FilterStatus } from "./FilterStatus";

export const ParentComponent = () => {
  const [showStatusBar, setShowStatusBar] = useState(0);

  return (
    <FilterStatus
      showStatusBar={showStatusBar}
      setShowStatusBar={setShowStatusBar}
    />
  );
};
