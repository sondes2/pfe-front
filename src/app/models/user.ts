import {Groupe} from './groupe';
import {Role} from './role';
import {roletype} from './roletype';

export class User {
  idUser: number;
  firstName: string;
  lastName: string;
  telNum: number;
  birthdate: string;
  address: string;
  mail: string;
  login: string;
  role: roletype;
  password: string;
  accountNonLocked: boolean;
  failedAttempt: number;
  lockTime: string;
  valid: boolean;
  stripeid: string;
  resettoken: string;
  groupe: Groupe;
  constructor(idUser: number, firstName: string, lastName: string, telNum: number, address: string, mail: string, login: string, role: roletype, password: string) {
    this.idUser = idUser;
    this.firstName = firstName;
    this.lastName = lastName;
    this.telNum = telNum;
    this.address = address;
    this.mail = mail;
    this.login = login;
    this.role = role;
    this.password = password;
  }
}
