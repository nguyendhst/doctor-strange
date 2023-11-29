export function getFormattedDate(date: Date, format = 'DD/MM/YYYY') {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Note: Months are zero-indexed
    const year = date.getFullYear();

    // Format day and month to have leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    let formattedDate;

    switch (format) {
        case 'DD/MM/YYYY':
            formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
            break;
        case 'MM/DD/YYYY':
            formattedDate = `${formattedMonth}/${formattedDay}/${year}`;
            break;
        // Add more cases for additional formats if needed
        default:
            throw new Error('Unsupported date format');
    }

    return formattedDate;
}
