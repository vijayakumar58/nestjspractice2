export enum ReportType {
    INCOME= "income",
    EXPENSE = "expense"
}

export const data : Data = {
    report: [
        {
            id:'wrt54',
            source:'Salary',
            amount:7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id:'wrt55',
            source:'Youtube',
            amount:3500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id:'wrt56',
            source:'Food',
            amount:300,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}

interface Data {
    report:{
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
}