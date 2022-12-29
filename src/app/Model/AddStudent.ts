import { Address } from "./Address"
import { Gender } from "./Gender"

export interface AddStudent {
  firstName: string,
  lastName: string
  dateOfBirth: string,
  email: string,
  mobile: number,
 genderId: string,
 physicalAddress: string,
 postalAddress: string
}
