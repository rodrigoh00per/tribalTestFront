import moment from "moment";

export const getMask = (mask) => {
  switch (mask) {
    case "phone":
      return value => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        if (onlyNums.length <= 3) return onlyNums;
        if (onlyNums.length <= 7)
          return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
          6,
          10
        )}`;
      }
    case "date":
      return (value) =>
        !value
          ? value
          : value
            .substr(0, 10)
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .substr(0, 8);
    default:
      return (value) => value;
  }
};


export const removeMask = (mask) => {
  switch (mask) {
    case "phone":
      return value => {
        if (!value) return value;
        else return value.replace(/[^\d]/g, "");

      }
    case "date":
      return (value) =>
        (!value)
          ? value :
          moment(value.replaceAll("/", "-"), 'DD-MM-YY').format('YYYY-MM-DD');

    default:
return (value) => value;
  }
}

export const getRemoveMask = (fieldsData, data) =>
  Object.keys(data).reduce((obj, key) => fieldsData?.[key] ? ({ ...obj, [key]: removeMask(fieldsData[key].mask)(data[key]) }) : { ...obj, [key]: data[key] }, {})


