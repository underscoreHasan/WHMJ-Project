function Journey (class1, buil1, class2, buil2, day, term){
        this.class1 = class1;
        this.buil1 = buil1;
        this.class2 = class2;
        this.buil2 = buil2;
        this.day = day;
        this.term = term;
        this.time = 0;
        this.online = false;
}

function Course (name, loc, until, start, end, day){
        this.name = name;
        this.location = loc;
        this.until = until;
        this.day = day;
        this.startTime = start;
        this.endTime = end;
}
 var listofCourses = [];

const ical = require('node-ical');
const events = ical.sync.parseFile("schedule.ics");
for (const event of Object.values(events)){
        console.log(
                'Course: ' + String(event.summary) +
                "\nLocation: " + event.location +
                "\nStart Date: " + event.start +
                "\nEnd Date: " + event.end + 
                "\n" + event.rrule
                + "\n"
        );
};


for (const event of Object.values(events)){
        var loc = String(event.location).substring(0, String(event.location).indexOf(","));
        var rrule = String(event.rrule);
        var endSplitted = String(rrule.split(";")[3]);
        var endMonth = endSplitted.charAt(10);
        var start = String(event.start);
        var day = start.split(" ")[0];
        var end = String(event.end);
        var startTime = start.split(" ")[4];
        var endTime = end.split(" ")[4];
        var name = String(event.summary);
        let course = new Course(name, loc, endMonth, startTime, endTime, day);
        listofCourses.push(course);
}


var length = listofCourses.length;
listofCourses = listofCourses.slice(1,length-1);

console.log(
        listofCourses[3].name + "\n" +
        listofCourses[3].location + "\n" +
        listofCourses[3].until + "\n" +
        listofCourses[3].day + "\n" +
        listofCourses[3].startTime + "\n" +
        listofCourses[3].endTime
)
var mapDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Mon", "Tue", "Wed", "Thu", "Fri"];

function Day (){
        this.courses = [];
        this.name = "";
        this.term = -1;
}

var week = [];

for (let i = 0; i<10; i++){
        var day = new Day();
        var date = mapDays[i];
        day.name = date;
        var t = -1;
        if (i < 5){
                day.term = 1;
                t = 1;
        }
        else{
                day.term = 0;
                t = 0;
        }

        for (let course of listofCourses){
                if (course.day === date && course.until == t){
                        day.courses.push(course);
                }
        }
        week.push(day);
}

