const changeDateFormat = (date: string, globalFormat: boolean): string => {
  const choppedDate = date.split("-");

  if (globalFormat) {
    return `${choppedDate[0]}-${choppedDate[1]}-${
      choppedDate[2].length === 1 ? `0${choppedDate[2]}` : choppedDate[2]
    }`;
  }

  return `${
    choppedDate[2].length === 1 ? `0${choppedDate[2]}` : choppedDate[2]
  }-${choppedDate[1]}-${choppedDate[0]}`;
};

export default changeDateFormat;
