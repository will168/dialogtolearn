import * as Immutable from "immutable";

export interface EmailContent {
    subject: string;
    body: string;
}
export interface Email {
    date: string;
    message: [EmailContent];

}
export interface Student {
    studentName: string;
    emails: [Email]
}

export interface Volunteer {
    volName: string;
    emails: [Email]
}


export interface FatRow {
    student: Student;
    volunteers: [Volunteer]
}

export interface Table {
    columnNames: [string];
    fatRows: [FatRow];
}
