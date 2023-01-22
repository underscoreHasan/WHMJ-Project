function Journey (c1, b1, c2, b2, day, term){
        this.c1 = c1;
        this.b1 = b1;
        this.c2 = c2;
        this.b2 = b2;
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
 var listofCourses = []

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
        var name = String(event.summary).substring(0, String(event.location).indexOf(","));
        let course = new Course(name, loc, endMonth, startTime, endTime, day);
        listofCourses.push(course);
}