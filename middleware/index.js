import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(createLogger({ collapsed: true }));
