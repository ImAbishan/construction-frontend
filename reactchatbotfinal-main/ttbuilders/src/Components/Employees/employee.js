import React from "react";
import Review from "./review.js";
function Employees() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our Stars</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Employees;
