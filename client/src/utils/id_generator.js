import shortid from "shortid";

export const generateId = () => {
  return shortid.generate();
};
