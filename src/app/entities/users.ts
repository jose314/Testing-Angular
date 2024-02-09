export class UserEntity {
  constructor(element: any) {
    this.name = element.name;
    this.email = element.email;
    this.username = element.username;
    this.city = element.address?.city;
    this.phone = element.phone;
    this.companyName = element.company?.name;
    this.street = element.address?.street
  }

  name: string;
  email: string;
  username: string;
  city: string;
  phone: string;
  companyName: string;
  street: string;
}
