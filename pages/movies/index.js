import React from "react";

import MainView from "../../components/MainView/MainView";

export default function index() {
  console.log("moviesComponent");
  return (
    <div>
      <MainView seccionType="all" />
    </div>
  );
}
