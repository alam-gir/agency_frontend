type options = { showTime?: boolean; showDate?: boolean; hour12?: boolean };

export const toBdDateTime = (date: Date, options?: options) => {
  const defaultOptions = {
    showTime: true,
    showDate: true,
    hour12: true,
    ...options,
  };

  const datePart = defaultOptions?.showDate
    ? date.toLocaleString("en-BD", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";

  const timePart = defaultOptions?.showTime
    ? date.toLocaleString("en-BD", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: defaultOptions.hour12,
      })
    : "";

  let finalDateString = "";
  if (defaultOptions.showDate && defaultOptions.showTime)
    finalDateString = `${datePart} ${timePart}`;
  else if (defaultOptions.showDate) finalDateString = datePart;
  else if (defaultOptions.showTime) finalDateString = timePart;

  return finalDateString;
};
