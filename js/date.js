const date_time = new Date()
    .toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        /* timeZone: 'Asia/Dhaka' // +06 timezone */
        timeZone: 'Asia/Dubai'
    });
    
    
//const date2 = new Date(2035, 8, 30); // month is 0-based (8 = September)
const date = new Date();
const formatted_date = date.toISOString().split('T')[0];
console.log(formatted_date); // 2035-09-30