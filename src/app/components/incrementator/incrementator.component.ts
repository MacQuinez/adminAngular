import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: []
})
export class IncrementatorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyend: string = 'Leyend';
  @Input() progress: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.changeValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }
  changePercentage(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && valor < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + valor;
    this.changeValue.emit(this.progress);
  }
}
