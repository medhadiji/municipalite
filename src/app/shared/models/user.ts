export class User {
    id: String;
    name: String;
    username : string;
    email: String;
    password: String;
    validate : boolean;
    userRole:'user'|'admin'|'pm';
    idDossier:String;
}
