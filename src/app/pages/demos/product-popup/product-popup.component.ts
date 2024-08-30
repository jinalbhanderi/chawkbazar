import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css'],
})
export class ProductPopupComponent {
  @Input() imageSrc: string = '';
  @Input() isOpen: boolean = false;
  @Input() details: any;

  close() {
    this.isOpen = false;
  }
}
