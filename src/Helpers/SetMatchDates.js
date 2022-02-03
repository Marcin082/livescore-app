const today = new Date();
let FromDate = null;
let ToDate = null;
const setDates = (activeOption, activeYear, todayFormat) => {
  if (activeOption === "Upcoming") {
    FromDate = todayFormat;
    if (today.getMonth() <= 6) {
      ToDate = activeYear + "-07-01";
    } else {
      ToDate = activeYear + 1 + "-07-01";
    }
  } else {
    if (today.getMonth() <= 6) {
      FromDate = activeYear - 1 + "-08-01";
    } else {
      FromDate = activeYear + "-08-01";
    }
    ToDate = todayFormat;
  }
  return [FromDate, ToDate];
};
export default setDates;
