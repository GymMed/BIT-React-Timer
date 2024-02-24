import dateFormat from "dateformat";

function getFinalDate(date) {
    const dateObject = new Date(date);
    const year = 1970 - dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth();
    const day = dateObject.getUTCDate() - 1;

    return `${year.toString().padStart(4, "0")} Years ${month
        .toString()
        .padStart(2, "0")} Months ${day
        .toString()
        .padStart(
            2,
            "0"
        )} Days ${dateObject.getUTCHours()} Hours ${dateObject.getUTCMinutes()} Minutes ${dateObject.getUTCSeconds()} Seconds`;
}

function combineDateWithTime(date, time) {
    return dateFormat(date, "yyyy-mm-dd") + `T` + time + ":00";
}

function combineDateWithTimeWithSeconds(date, time, seconds) {
    return (
        dateFormat(date, "yyyy-mm-dd") +
        `T${time}:${seconds.toString().padStart(2, "0")}`
    );
}

function formattingDate(dateTime) {
    const utcDateTimeNow = new Date().getTime();
    const newDateTime = new Date(
        new Date(0).getTime() + (dateTime.getTime() - utcDateTimeNow)
    );

    return getFinalDate(newDateTime);
}

function getLeftTimeString(date) {
    return `${date.getFullYear()} Years ${date.getMonth()} Months ${date.getDate()} Days ${date.getHours()} Hours ${date.getMinutes()} Minutes ${date.getSeconds()} Seconds`;
}

export {
    getFinalDate,
    formattingDate,
    getLeftTimeString,
    combineDateWithTime,
    combineDateWithTimeWithSeconds,
};
