import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDay() + 21);
  times = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];
  setectedTime: string;

  constructor() {
  }

  ngOnInit() {
  }

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
}
