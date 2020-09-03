import React from "react";
import { compose } from "redux";
import { withFirebase } from "../../Firebase";

function Properties() {
  return <div></div>;
}

export default compose(withFirebase)(Properties) as any;
