export interface Login {
  userName: string;
  password: string;
}

export interface User {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  password?: string;
  mobile?: string;
  email?: string;
  address?: string;
  type?:string;
}

export interface Enquiry {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}