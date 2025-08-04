import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  standalone: true
})
export class ProductComponent {

  @Input() product!: Product;   
  @Output() productOutput = new EventEmitter<Product>();
  ngOnChanges() {
 
  }

  addToCart() {
   this.productOutput.emit(this.product);
  }

}
