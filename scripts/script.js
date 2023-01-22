function Journey (c1, b1, c2, b2, day, term){
        this.c1 = c1;
        this.b1 = b1;
        this.c2 = c2;
        this.b2 = b2;
        this.day = day;
        this.term = term;
        this.time = 0;
}

let J1 = new Journey('CPSC', 'West Mall Swing Space', 'CHEM', 'Chemistry', 'MO', 1);
let J2 = new Journey('DSCI', 'Hennings', '', '', 'TU', 1);
let J3 = new Journey('CPSC', 'West Mall Swing Space', 'CHEM', 'Chemistry', 'WE', 1);
let J4 = new Journey('DSCI', 'Hennings', 'CHEM', 'Chemistry', 'TH', 1);
let J4 = new Journey('CHEM', 'Chemistry', 'CHEM', 'Chemistry', 'TH', 1);
let J4 = new Journey('CPSC', 'Institute for Comput', 'CHEM', 'Chemistry', 'TH', 1);



console.log(J1.time);
console.log(J1.day)

/*!!! Some sections do not have an assigned room*/

/*var journeyList = [];*/

/*UBC ics file structure
- Every period is a seperate VEVENT
- One single period can be spotted by it's beginning 'BEGIN:VEVENT' and ending 'END:VEVENT' tag
- Periods are ordered by term, and then by alphabetical order of their 4 letter code*/
