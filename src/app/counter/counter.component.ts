import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, resetCount } from './counter.actions';
import { Counter } from './counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<Counter>;

  constructor(private store: Store<Counter>) {
    this.count$ = this.store.select('count');
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  resetCount() {
    this.store.dispatch(resetCount());
  }
}
