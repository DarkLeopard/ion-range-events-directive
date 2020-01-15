import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
}                     from '@angular/core';
import { IonRange }   from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ion-range',
})
export class RangeEventsDirective {

  @Output() public ionStart: EventEmitter<RangeValue> = new EventEmitter();
  @Output() public ionEnd: EventEmitter<RangeValue> = new EventEmitter();

  constructor(
      protected elemRef: ElementRef<IonRange>,
  ) {}

  @HostListener('mousedown', [ '$event' ])
  @HostListener('touchstart', [ '$event' ])
  public onStart(ev: Event): void {
    this.ionStart.emit(this.elemRef.nativeElement.value);
    ev.preventDefault();
  }

  @HostListener('mouseup', [ '$event' ])
  @HostListener('touchend', [ '$event' ])
  public onEnd(ev: Event): void {
    this.ionEnd.emit(this.elemRef.nativeElement.value);
    ev.preventDefault();
  }

}
