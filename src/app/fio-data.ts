export class FioData {
  surname: string;
  name: string;
  patronymic: string;
  gender: string;
  qc: string;
  source: string;

  constructor(surname: string, name: string, patronymic: string, gender: string, qc: string, source: string) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.gender = gender;
    this.qc = qc;
    this.source = source;
  }
}
