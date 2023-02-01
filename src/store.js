import { createStore } from "redux";
import combined from "./reducers";

export default createStore(combined);
