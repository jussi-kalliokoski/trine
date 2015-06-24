import "normalize.css";
import "./styles/styles.css";
import "highlight.js/styles/default.css";
import "codemirror/lib/codemirror.css";
import React from "react";
import { trineRequire } from "../../../.tmp/trineRequire";
import { Docs } from "../components/Docs";

const container = document.getElementById("container");
const props = JSON.parse(document.getElementById("props").innerHTML);
window.require = trineRequire;

React.render(<Docs {...props} />, container);
