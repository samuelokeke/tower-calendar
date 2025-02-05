import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Appointment } from 'src/app/core/interfaces/appointment';
import {
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
} from 'date-fns';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-calendar-table',
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    DatePipe,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
  ],
  templateUrl: './calendar-table.component.html',
  styleUrl: './calendar-table.component.scss',
})
export class CalendarTableComponent {
  currentMonth: Date = new Date();
  daysInMonth: Date[] = [];

  appointments: { [key: string]: Appointment[] } = {};

  constructor(private dialog: MatDialog) {
    this.generateCalendar();
  }

  generateCalendar() {
    const start = startOfMonth(this.currentMonth);
    const end = endOfMonth(this.currentMonth);
    this.daysInMonth = eachDayOfInterval({ start, end });

    this.daysInMonth.forEach((day) => {
      const key = format(day, 'yyyy-MM-dd');

      if (!this.appointments[key]) {
        this.appointments[key] = [];
      }
    });
  }

  appointmentsByDate(date: Date) {
    const fdate = format(date, 'yyyy-MM-dd');

    return this.appointments[fdate];
  }

  changeMonth(offset: number) {
    this.currentMonth = addMonths(this.currentMonth, offset);
    this.generateCalendar();
  }

  drop(event: CdkDragDrop<Appointment[]>, date: Date) {
    const fdate = format(date, 'yyyy-MM-dd');

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openDialog(date: Date) {
    const fdate = format(date, 'yyyy-MM-dd');

    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      disableClose: true,
      panelClass: ['app-dialog'],
      data: { date },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.appointments[fdate].push({
          id: new Date().getTime(),
          title: result.title,
          date: fdate,
          time: result.time,
          duration: result.duration,
        });
      }
    });
  }
}
