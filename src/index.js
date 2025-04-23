import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBurger,
  faMoon,
  faSearch,
  faArrowRight,
  faShare,
  faComment,
  faSpinner,
  faTimes,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faMeta, faRedditAlien, faXTwitter,  } from "@fortawesome/free-brands-svg-icons";

library.add(faBurger, faMoon, faSearch, faArrowRight, faLinkedinIn, faXTwitter, faMeta, faRedditAlien, faShare, faComment, faSpinner, faTimes, faBurger, faFilter);

// template_acfbkmf
// service_dmf4e7a
//qVGgK80-uMkkItvbU



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
