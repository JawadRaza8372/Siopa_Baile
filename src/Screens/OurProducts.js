import React from "react";
import LoadingCompnent from "../Components/LoadingCompnent";
import NoheadingItems from "../Components/NoheadingItems";
function OurProducts({ data }) {
  if (data) {
    return (
      <>
        <div style={{ width: "100%", height: "auto", overflowX: "hidden" }}>
          <div className="row">
            <div className="col-10 mx-auto p-4">
              <div className="container pt-4">
                <NoheadingItems data={data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <LoadingCompnent />;
  }
}

export default OurProducts;
