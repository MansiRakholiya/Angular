import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getInfo1()
  {
    return [{"id":101","name":"nirali","java developer","10000"}];
  }

  info1: any[] = ["101","nirali","java developer","10000"];
  info2: any[] = ["101","nirali","java developer","10000"];
  info3: any[] = ["101","nirali","java developer","10000"];

  constructor() { }
}
