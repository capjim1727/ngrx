import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  getText: any;
 
  constructor(private store: Store<{ counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select(this.getText).subscribe((getText) => {
      console.log('Channel Name Observable called');
      this.getText = getText;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
