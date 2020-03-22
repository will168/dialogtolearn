import * as Immutable from "immutable";


export interface ITable {
    id?:         number;
    student?:    IStudent;
    volunteers?: IVolunteer[];
}

export interface IStudent {
    studentName?: string;
    emails?:      { [key: string]: IEmail[] };
}

export interface IEmail {
    subject?: string;
    body?:    string;
}

export interface IVolunteer {
    volName?: string;
    emails?:  { [key: string]: IEmail[] };
}


const TableRecord = Immutable.Record({
    id: undefined,
    student: undefined,
    volunteers: undefined
});

export class Table extends TableRecord {}


export function convertTable(iTable: ITable): Table {
    return new Table(iTable);
}

export function convertTables(iTables: Array<ITable>): Immutable.List<Table> {
    const tables: Array<Table> = iTables.map((iTable: ITable) => convertTable(iTable));
    return Immutable.List<Table>(tables);
}


