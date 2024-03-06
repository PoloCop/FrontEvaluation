import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/iEvent';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private httpClient: HttpClient) { }

  public getEvents() {
    return new Promise<IEvent[]>((resolve, reject) => {
      return this.httpClient.get<any>('http://localhost:7071/api/events').subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }
}
