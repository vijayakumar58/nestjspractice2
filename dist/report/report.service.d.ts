import { ReportType } from "src/data";
import { ReportResponseDto } from "src/dtos/report.dto";
interface Report {
    amount: number;
    source: string;
}
interface UpdateReport {
    amount?: number;
    source?: string;
}
export declare class ReportService {
    getAllreports(type: ReportType): ReportResponseDto[];
    getReportById(type: ReportType, id: string): ReportResponseDto;
    createReport(type: ReportType, { amount, source }: Report): ReportResponseDto;
    updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto;
    deleteReport(id: string): void;
}
export {};
