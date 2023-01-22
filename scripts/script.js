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

let J1 = new Journey('CPSC 110 103', 'West Mall Swing Space', 'CHEM 111 112', 'Chemistry', 'Mon', 1);
let J2 = new Journey('DSCI 100 004', 'Hennings', '', '', 'Tue', 1);
let J3 = new Journey('CPSC 110 103', 'West Mall Swing Space', 'CHEM 111 112', 'Chemistry', 'Wed', 1);
let J4 = new Journey('DSCI 100 004', 'Hennings', 'CHEM 111 112', 'Chemistry', 'Thu', 1);
let J5 = new Journey('CHEM 111 112', 'Chemistry', 'CHEM 111 L07', 'Chemistry', 'Thu', 1);
let J6 = new Journey('CPSC 110 L19', 'Institute for Computing (ICICS/CS)', 'CHEM 111 112', 'Chemistry', 'Fri', 1);

let J7 = new Journey('CPSC 110 103', 'West Mall Swing Space', 'CHEM 111 112', 'Chemistry', 'Mon', 2);
let J8 = new Journey('DSCI 100 004', 'Hennings', '', '', 'Tue', 2);
let J9 = new Journey('CPSC 110 103', 'West Mall Swing Space', 'CHEM 111 112', 'Chemistry', 'Wed', 2);
let J10 = new Journey('DSCI 100 004', 'Hennings', 'CHEM 111 112', 'Chemistry', 'Thu', 2);
let J11 = new Journey('CHEM 111 112', 'Chemistry', 'CHEM 111 L07', 'Chemistry', 'Thu', 2);
let J12 = new Journey('CPSC 110 L19', 'Institute for Computing (ICICS/CS)', 'CHEM 111 112', 'Chemistry', 'Fri', 2);
