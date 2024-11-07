import "./page.css";
import "./dropdown.css";
import "./carousel.css";
import { createDropdown } from "./dropdown.js";

let button = document.querySelector(".dropdown-button");
let dropdown = document.querySelector(".dropdown");

createDropdown(button, dropdown, "click");
