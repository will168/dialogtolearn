
export interface Table {
    student?:    Student;
    volunteers?: Volunteer[];
}

export interface Student {
    studentName?: string;
    emails?:      { [key: string]: Email[] };
}

export interface Email {
    subject?: string;
    body?:    string;
}

export interface Volunteer {
    volName?: string;
    emails?:  { [key: string]: Email[] };
}
