import React, { Suspense } from "react";
import { StyledLayout } from "./Layout.styles";
import Header from "../atoms/Header";
import Loaders from "../atoms/Loaders";

const Layout = ({ children, showTemplate }) => {
  return (
    <StyledLayout $showlayout={showTemplate}>
      {showTemplate ? (
        <>
          <br /> {/* navbar */}
          <div className="children">
            <Header />
            <Suspense fallback={<Loaders viewLoader />}>{children}</Suspense>
          </div>
        </>
      ) : (
        <>
          <div className="children">{children}</div>
        </>
      )}
    </StyledLayout>
  );
};

export default Layout;
