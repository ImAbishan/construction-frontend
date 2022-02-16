import React, { useState, useRef, useEffect } from "react";

import "./feedback.css";

const Feedback = () => {
  return (
    <>
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>Share Your Feedback</h3>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="text"
              tabindex="3"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Give us Your Valuable Feedbacks"
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Feedback;
