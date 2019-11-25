import React from "react";

import Layout from "../components/layout";
import "../components/Reviews.css";
import Header2 from "../Header2.js";
const foo = () => {
  window.alert("done");
  //window.location.reload();
};
const Reviews = () => (
  <Layout>
    <div className="Reviews">
      <Header2 />
      <h1>We care your taste!!!</h1>

      <div id="form">
        <form id="waterform" method="post">
          <div class="formgroup" id="name-form">
            <label for="name">Your UserId*</label>
            <input type="text" id="name" name="name" />
          </div>

          <div class="formgroup" id="email-form">
            <label for="email">Dish name*</label>
            <input type="text" id="text1" name="email" />
          </div>

          <div class="formgroup" id="message-form">
            <label for="message">Your message</label>
            <textarea id="message" name="message" />
          </div>

          <input
            type="submit"
            value="Submit"
            onClick={window.location.reload}
          />
        </form>
      </div>
    </div>
  </Layout>
);
export default Reviews;
