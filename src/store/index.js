import { createStore, createLogger } from "vuex";
import other from "./modules/other";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    other,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
