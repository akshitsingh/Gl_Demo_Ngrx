import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
  
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() show : boolean = false;
  @Output() reload = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
