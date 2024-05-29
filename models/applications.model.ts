export enum ApplicationStatusName {
  CLIENT_INTERVIEW_1 = "Client Interview 1",
  CLIENT_INTERVIEW_2 = "Client Interview 2",
  CLIENT_INTERVIEW_FINAL = "Client Interview - Final",
  INTERNAL_INTERVIEW = "Internal Interview",
  RESUME_SUBMITTED = "Resume Submitted",
  OFFERED = "Offered",
  PLACED_PERM = "Placed PERM",
}

export interface ApplicationStatus {
  statusId: number;
  name: string;
  active: boolean;
  rejected: boolean;
  default: boolean;
  defaultRejected: boolean;
  workflow: {
    stage: string;
    stageIndex: number;
    step: number;
    progress: string;
  };
}

export interface Application {
  applicationId: number;
  jobTitle: string;
  status: ApplicationStatus;
  review: {
    stage: string;
  };
}

export interface ApplicationSummary {
  jobTitle: string;
  statusCounts: { [statusName: string]: number };
}
