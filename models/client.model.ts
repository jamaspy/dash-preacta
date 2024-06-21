export interface Client {
  CompanyId: number;
  Name: string;
  HasLogo: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
  AddressId: string;
  AddressName: string;
  Line1: string | null;
  City: string | null;
  State: string;
  Postcode: string | null;
  Url: string | null;
  PrimaryContactId: number | null;
  PrimaryContactName: string | null;
  OwnerId: number;
  Owner: string;
  CreatedById: number | null;
  CreatedBy: string | null;
  UpdatedById: number;
  UpdatedBy: string;
  JobAdderSource: string;
}
