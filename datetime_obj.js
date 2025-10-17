let d;

d = new Date();

console.log(d, typeof d);

d_str = d.toString();

console.log("toString", d_str, typeof d_str);

d_year = d.getFullYear();

console.log("year", d_year, typeof d_year);

d_month = d.getMonth(); // 0 Based.

console.log("month", d_month, typeof d_month);

d_date = d.getDate();

console.log("date", d_date, typeof d_date);

d_day = d.getDay();

console.log("day", d_day, typeof d_day);

d_hour = d.getHours();

console.log("hour", d_hour, typeof d_hour);

d_minute = d.getMinutes();

console.log("minute", d_minute, typeof d_minute);

d_second = d.getSeconds();

console.log("second", d_second, typeof d_second);

d_millisecond = d.getMilliseconds();

console.log("millisecond", d_millisecond, typeof d_millisecond);

d_timestamp = d.getTime();

console.log("timestamp", d_timestamp, typeof d_timestamp);

d_valueof = d.valueOf();

console.log("valueof", d_valueof, typeof d_valueof);
