interface iUsers {
    name: string;
    email: string;
    password: string;
    homeAddress: string;
    telephoneNo: number;
}

interface iUsersData extends iUsers, Document