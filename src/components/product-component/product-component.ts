import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [],
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productChanged = new EventEmitter<Product>();

  onCheckboxChange() {
    this.product.isChecked = !this.product.isChecked;
    this.productChanged.emit(this.product);
  }
}
