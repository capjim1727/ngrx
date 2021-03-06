import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
  
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) { }
  
  ngOnInit(): void {
      this.store.select(getCounter).subscribe((counter) => {
        console.log('Counter Observable called');
        this.counter = counter;
      });
    }
  }

