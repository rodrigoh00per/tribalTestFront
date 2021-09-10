import i18n from "../../../i18n"




const validateEmail = (email) => {
  if (!email) {
    return i18n.t("forms.email.errors.required");
  } else if (checkFormatEmail(email)) {
    return i18n.t("forms.email.errors.incorrect");
  } else return null;
};

const checkFormatEmail = (email) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? true : false;


const genericValidate = (value) => (!value ?   i18n.t("forms.generic.errors.required") : null);

export const getValidateFunction = (key) => {
  const typeValidation = {
    email: validateEmail,
  };
  return typeValidation?.[key] ?? genericValidate;
};




