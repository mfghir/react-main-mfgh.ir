import { t } from "i18next";

export const validation = (inpVal) => {
  const error = {};

  if (!inpVal.name.trim()) {
    error.name = t("errorNameOne");
  } else if (inpVal.name.length < 2) {
    error.name = t("errorNameTwo");
  } else {
    delete error.name;
  }

  if (!inpVal.email) {
    error.email = t("errorEmailOne");
  } else if (!/\S+@\S+\.\S+/.test(inpVal.email)) {
    error.email = t("errorEmailTwo");
  } else {
    delete error.email;
  }

  if (!inpVal.message) {
    error.message = t("errorMessageOne");
  } else if (inpVal.message.length < 10 && inpVal.message === "") {
    error.message = t("errorMessageTwo");
  } else {
    delete error.message;
  }

  return error;
};
