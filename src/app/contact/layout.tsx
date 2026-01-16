import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>
    <h1>This is Contact Layout page</h1>
    {children}
    </div>;
}
