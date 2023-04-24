import { FC, ReactNode } from "react";

export const DarkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
