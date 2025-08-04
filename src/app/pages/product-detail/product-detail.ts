import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product-card/product-card';
import { Product as ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { CategoryList } from "../../category-list/category-list";

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, ProductComponent, CategoryList],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
  
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProducts().subscribe({
        next: (data) => {
          console.log(data)
        this.products = data.products;
        },
        error: (err) => {
          alert("Request Failed " + err);
        }
      })
  }



  
  
  }

