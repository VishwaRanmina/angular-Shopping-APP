import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './services/cart';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'products', component: ProductDetail }

];


