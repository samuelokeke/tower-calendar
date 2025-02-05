import { Component } from '@angular/core';
import { CalendarTableComponent } from './calendar-table/calendar-table.component';
import { Appointment } from 'src/app/core/interfaces/appointment';

@Component({
  selector: 'app-calendar',
  imports: [CalendarTableComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  annointed: string = '';
  appointments: { [key: string]: Appointment[] } = {};

  updateAppointments(appointments: { [key: string]: Appointment[] }) {
    this.appointments = appointments;
  }
}
