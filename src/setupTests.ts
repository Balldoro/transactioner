import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

Object.defineProperty(global.self, "crypto", {
  value: {
    //@ts-ignore
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
});
//@ts-ignore
global.crypto.subtle = {};
