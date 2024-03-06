import { Component,OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event/event-service.service';
import { IEvent } from '../../interfaces/iEvent';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit{
  constructor(
    private _eventService:EventServiceService) {}

  events: IEvent[] = [];
  notFoundEvent: boolean = false;
  ngOnInit(): void {
    this.getEvents();
  }

  //Obtiens tous les users
  getEvents(): void {
    this._eventService.getEvents().then(
      (data: IEvent[]) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des evenements', error);
        this.notFoundEvent = true;
      }
    );
  }
}
