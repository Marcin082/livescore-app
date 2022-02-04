const thirtyOne = [1,4,2, 6, 7, 9, 11];

export const CalendarFunctions = (activeDay, firstDay, screenWidth) => {
  console.log(activeDay.getMonth() );
  activeDay.setYear(2022);
  if (
    activeDay.getDate() >= 1 &&
    activeDay.getDate() <= 3 &&
    activeDay.getMonth() === 0
  ) {
    firstDay.setDate(activeDay.getDate() - 4);
  }
  else if (
    activeDay.getDate() >= 1 &&
    activeDay.getDate() <= 3 &&
    activeDay.getMonth() === 2
  ) {
    firstDay.setDate(activeDay.getDate() -6);
  }
  else if (
    activeDay.getDate() >= 1 &&
    activeDay.getDate() <= 3 &&
    !thirtyOne.includes(activeDay.getMonth())
  ) {
    firstDay.setDate(activeDay.getDate() - 4);
  }
   else {
    firstDay.setDate(activeDay.getDate() - 3);
  }
  const CheckMonth = () => {
    activeDay.getDate() > 3
      ? firstDay.setMonth(activeDay.getMonth())
      : activeDay.getMonth() === 0
      ? firstDay.setMonth(11)
      : firstDay.setMonth(activeDay.getMonth() - 1);
  };
  CheckMonth();

  let dates = [];
  let j = 0;
  for (let i = 1; i < 8 && j < 7; i++) {
    if (i === 4) {
      dates[j] += activeDay;
    } else {
      dates[j] += firstDay;
    }
    firstDay.setDate(firstDay.getDate() + 1);

    j++;
  }
  if (screenWidth < 1000) {
    dates.shift();
    dates.pop();
  }
  console.log(dates);
  return dates;
};
