import React from "react";
import Card from "@/components/Card";
import Xingmuxiaoguo from "./a_xingmuxiaoguo";

function FunnyCss() {
  return (
    <>
      <Card title="好看的 hover 效果">
        <div style={{ display: "flex" }}>
          <Xingmuxiaoguo />
        </div>
      </Card>
    </>
  );
}

export default FunnyCss;
