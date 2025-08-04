import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Product as ProductService } from '../services/product';
import { Category } from "../category/category";
import { CommonModule } from '@angular/common';
import { CategoryModal } from '../models/category.modal';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [Category, CommonModule ],
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss'
})
export class CategoryList implements OnInit {

  categories: CategoryModal[] = [];
  @Input() public displayType = 'Grid';
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getcategories().subscribe({
      next: (data) => {
        console.log(data)
        this.categories = data;
      },
      error: (err) => {
        alert("Request Failed " + err);
      }
    });
  }
}
