export class User {
    id         :number =0;
    name       :string="";
    username   :string="";
    email      :string="";
    address    : Address = new Address;
    phone      :string="";
    website    :string="";
    company    : Company = new Company;

}

export class Address{
    street      : string="";
    suite       : string ="";
    city        : string = "";
    zipcode     :string="";
}

export class Company{
    name        : string = "";
    catchPhrase : string = "";
    bs          : string="";

}