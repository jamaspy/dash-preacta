import { Contact } from "./contact.model";
import { User } from "./user.model";

export interface Job {
  jobId: number;
  jobTitle: string;
  location: {
    locationId: number;
    name: string;
    area: {
      areaId: number;
      name: string;
    };
  };
  company: {
    companyId: number;
    name: string;
    status: {
      statusId: number;
      name: string;
      active: boolean;
      default: boolean;
    };
    owner: User;
  };
  contact: Contact;
  status: {
    statusId: number;
    name: string;
    active: boolean;
    default: boolean;
  };
  source: string;
  userFavourite: boolean;
  jobDescription: string;
  numberOfJobs: number;
  workplaceAddress: {
    addressId: string;
    name: string;
    street: string[];
    city: string;
    state: string;
    postalCode: string;
    country: string;
    countryCode: string;
    phone: string;
    fax: string;
    url: string;
  };
  category: {
    categoryId: number;
    name: string;
    subCategory: {
      subCategoryId: number;
      name: string;
    };
  };
  start: {
    immediate: boolean;
    relative: {
      period: number;
      unit: string;
    };
    date: string;
  };
  endDate: string;
  workShift: {
    startTime: string;
    endTime: string;
    workDays: string[];
  };
  duration: {
    period: number;
    unit: string;
  };
  workType: {
    workTypeId: number;
    name: string;
    ratePer: string;
  };
  jobType: string;
  salary: {
    ratePer: string;
    rateLow: number;
    rateHigh: number;
    currency: string;
    timePerWeek: number;
  };
  fee: {
    rateType: string;
    rate: number;
    estimatedTotal: number;
    currency: string;
  };
  otherContacts: Contact[];
  skillTags: {
    matchAll: boolean;
    tags: string[];
  };
  custom: {
    fieldId: number;
    name: string;
    type: string;
    value: any;
  }[];
  owner: User;
  recruiters: User[];
  partnerActions: {
    actionId: string;
    actionName: string;
    reference: string;
    stage: string;
    status: string;
    result: {
      score: number;
      url: string;
      urlType: string;
    };
    submittedAt: string;
    submittedBy: User;
    updatedAt: string;
    updatedBy: User;
  }[];
  createdBy: User;
  createdAt: string;
  updatedBy: User;
  updatedAt: string;
  closedBy: User;
  closedAt: string;
  statistics: {
    applications: {
      new: number;
      active: number;
      total: number;
    };
  };
  links: {
    self: string;
    attachments: string;
    applications: string;
    notes: string;
  };
}
