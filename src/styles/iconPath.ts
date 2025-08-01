const BASE_PATH = process.env.NODE_ENV === "production" ? "/List_App/" : "/";

export const Icons = {
  penIcon: `${BASE_PATH}pen.svg`,
  crossIcon: `${BASE_PATH}cross.svg`,
  plus: `${BASE_PATH}plus.svg`,
  check: `${BASE_PATH}checked.svg`,
};
