var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"
];
var monthArray = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

function getTime() {
    var today = new Date();
}
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var d = dayArray[today.getDay()];
var mo = monthArray[today.getMonth()];
var y = today.getFullYear();
var t = setTimeout(function() { getTime() }, 500);

document.getElementById('time').innerHTML =
    "<br><h1>" + h + ":" + m + ":" + s + "</h1>&nbsp;<span>" + d + ",</span>&nbsp; < span > "+mo+" < /span>&nbsp;<span>"+y+"</span > ";

function correctDigit(i) {
    if (i < 10) i = "0" + i;
    return i;
}

m = correctDigit(m);
s = correctDigit(s);
document.getElementById('time').innerHTML = "<br><h1>
class = 'large' > "+h+": "+m+": "+s+" < /h1>&nbsp;<h2><span>
class = 'dark' > "+d+" < /span>&nbsp;<span>
class = 'dark' > "+mo+" < /span>&nbsp;<span>"+y+"</span > < /h2>";
