import {FioData} from "./fio-data";

export class FioResponse {
  value: string;
  unrestricted_value: string;
  data: FioData;

  constructor(value: string, unrestricted_value: string, data: FioData) {
    this.value = value;
    this.unrestricted_value = unrestricted_value;
    this.data = data;
  }
}
