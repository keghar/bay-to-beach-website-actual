import { ReactNode } from "react";

function WidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto max-w-screen-2xl lg:px-10 xl:px-20">
      {children}
    </div>
  );
}

export default WidthWrapper;
