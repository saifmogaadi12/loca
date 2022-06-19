export interface User {
  id?: number | string;
  name: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
  img?: string;
  status: string;
}

// interfacce aderss
export interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: Geo;
}
export interface Geo {
  lat?: string;
  lng?: string;
}
export interface Company {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}
