

const topNStudentsAttendees = (students, attendees, N) => {
    if (!students || !attendees) return [];
    if (!Array.isArray(students) || !Array.isArray(attendees)) throw 'Params are not valid';

    let studentsAtLectures = [];

    students.forEach(s => {
        let lectures = 0;
        attendees.forEach(l => l.includes(s) ? lectures++ : lectures);
        studentsAtLectures.push({ name: s, lectures: lectures });
    });

    //Sort by num of lectures
    studentsAtLectures.sort((a, b) => a.lectures > b.lectures ? -1 : 1);

    return studentsAtLectures.splice(0, N).map(s => s.name);
}


/*

const students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];
const attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'],
['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'],
['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan']];
const N = ----3;

 const res = topNStudentsAttendees(students, attendees, N);
 console.log(res);
*/

/*
Output: ['Yoni', 'Nitzan', 'Eden']
*/