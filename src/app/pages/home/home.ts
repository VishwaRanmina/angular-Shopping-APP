import { Component } from '@angular/core';
import { CategoryList } from "../../category-list/category-list";

@Component({
  selector: 'app-home',
  imports: [CategoryList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
