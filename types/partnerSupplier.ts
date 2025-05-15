interface Address {
  id: string;
  state: string;
  city: string;
  district: string;
  street: string;
  complement?: string | null;
  number: string;
  zipCode: string;
}

interface Store {
  id: string;
  name: string;
  description?: string | null;
  website?: string | null;
  rating: number;
  openingHours?: string | null;
  addressId: string;
  partnerId: string;
  address: Address;
}

interface PartnerSupplier {
  id: string;
  tradeName: string;
  companyName: string;
  document: string;
  stateRegistration?: string | null;
  contact?: string | null;
  addressId?: string | null;
  storeId?: string | null;
  store?: Store | null;
  profileImage?: string | null;
}

interface User {
  id: string;
  email: string;
  accessPending: boolean;
  professionalId?: string | null;
  partnerSupplierId?: string | null;
  partnerSupplier?: PartnerSupplier | null;
}
