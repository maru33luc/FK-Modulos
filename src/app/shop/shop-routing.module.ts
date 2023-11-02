import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';


const routes: Routes = [
  { path: "", component: ShopPageComponent },
  { path: "shop/:id", component: ItemPageComponent},
  { path: "cart", component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
