let monthArr; //contains the number of days in each month 
let febDays; //stores the number of days in February, possibility of a leap year
let date; //date placeholder
let day; //we are always using the first day only
let month; 
let monthDays; //number of days in that month
let year;
let firstDay; //determines the day of the week to start counting

//variables needed to calculate the day of the week for the starting point 
let monthZellar; //determining the number associated with the month according to Zellar's rule
let monthZellarArr; //array with month values according to Zellar 
let yearZellar; //determining the year according to Zellar. January and February are always the previous year. 
let yearZellarStr; //converting year to a string. 
let lastDigits; //last two digits of the year (After conversion)
let firstDigits; //first two digits of the year (After conversion)
let dayOfWeek; //determines the day of week the first day will be


date = new Date(); //date placeholder 
day=1; //since we want to calculate the first day of every month 
month=date.getMonth(); //gets the current month. NOTE: Month starts at 0, which is January.
year=date.getFullYear(); //get current year 
febDays=findFebDays(year); //finds the number of days in the month of February
monthArr=[31,`${febDays}`,31,30,31,30,31,31,30,31,30,31]; //storing the number of days in each month starting in january 
monthDays=monthArr[month];  //Gets the number of days in the month, based on the month array. 

//Filling in the calendar 
monthZellarArr=[11,12,1,2,3,4,5,6,7,8,9,10]; //month values, since March is 1. 
monthZellar=monthZellarArr[month]; 
if(month==0||month==1){ //if the month is january or February, year must be subtracted by 1. 
    yearZellar=year-1;
}
else{
    yearZellar=year;
}
yearZellarStr=yearZellar.toString(); //converts the year to a String
lastDigits=yearZellarStr.substring(2);
lastDigits=parseInt(lastDigits); //converts the last two digits of the year back to a number
console.log(lastDigits);
firstDigits=yearZellarStr.substring(0,2);
firstDigits=parseInt(firstDigits); //converts the first two digits of the year back to a number
console.log(firstDigits);
let first=Math.floor((13.0*monthZellar-1)/5.0); //first math.floor part of the equation
console.log("first: "+first);
let second=Math.floor(lastDigits/4.0); //second math.floor part of the equation
console.log("second "+second);
let third=Math.floor(firstDigits/4.0); //third math.floor part of the equation
console.log("third "+third);
//Formula Used: f=k+[(13*m-1)/5]+D+[D/4]+[C/4]-2*C 
dayOfWeek=day+first+lastDigits+second+third-2*firstDigits;
//day+(Math.floor(2.6*monthZellar-0.2))-(2*firstDigits)+lastDigits+(Math.floor(lastDigits/4))+(Math.floor(firstDigits/4));
//day+Math.floor((13.0*monthZellar-1)/5.0)+lastDigits+Math.floor(lastDigits/4.0)+Math.floor(firstDigits/4.0)-2.0*firstDigits;
console.log(dayOfWeek);

if(dayOfWeek>0){
    dayOfWeek=dayOfWeek%7;
}
else{
    dayOfWeek=dayOfWeek-(7*Math.floor(dayOfWeek/7));
}
console.log(dayOfWeek);



let startPoint=dayOfWeek+1; //must add 1, since dayOfWeek starts counting at 0, while startPoint starts at 1 

for(let b=1;b<startPoint;b++){ //boxes before the starting div will be gray 
    document.getElementById(`${b}`).style.backgroundColor="gray";

}
for(let i=1;i<=monthDays;i++){ //labeled dates 
    document.getElementById(`${startPoint}`).innerHTML=`${i}`;
    startPoint++;
}
for(let z=startPoint;z<=35;z++){ //boxes after the last available day will be gray
    document.getElementById(`${z}`).style.backgroundColor="gray";
}


function findFebDays(year){ //returns the number of days in february by calculating leap year
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return 29;
            }
            else{
                return 28; 
            }
        }
        else{
            return 29;
        }
    }
    else{
        return 28;
    }
}
