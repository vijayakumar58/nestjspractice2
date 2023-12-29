"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["INCOME"] = "income";
    ReportType["EXPENSE"] = "expense";
})(ReportType || (exports.ReportType = ReportType = {}));
exports.data = {
    report: [
        {
            id: 'wrt54',
            source: 'Salary',
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'wrt55',
            source: 'Youtube',
            amount: 3500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'wrt56',
            source: 'Food',
            amount: 300,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
};
//# sourceMappingURL=data.js.map