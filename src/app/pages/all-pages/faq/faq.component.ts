import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  @Input() title!: string;
  @Output() toggle = new EventEmitter<void>();
  isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
  }
}
