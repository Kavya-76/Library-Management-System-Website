// let date1 = new Date("01/16/2024");
// let date2 = new Date();

// // Calculating the time difference
// // of two dates


function returnDate(date1, date2)
{
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days;
}

module.exports = returnDate;