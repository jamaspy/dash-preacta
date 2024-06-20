export interface JobApplication {
  JobApplicationId: string;
  JobTitle: string;
  JobReference: string;
  CompanyID: number;
  CompanyName: string;
  Manual: boolean;
  StatusIdIndexed: number;
  CandidateId: number;
  CandidateName: string;
  Source: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  JoborderId: number;
  JobadId: number | null;
  Owner: number;
  Owner_Name: string;
  CreatedBy: number;
  CreatedBy_Name: string;
  UpdatedBy: number;
  UpdatedBy_Name: string;
  JobAdderSource: string;
}
