import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CategoryModal } from '../models/category.modal';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  @Input() category!: CategoryModal;
  @Input() public componentType = 'home';

}
