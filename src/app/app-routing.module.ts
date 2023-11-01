import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopPageComponent } from './pages/shop/shop-page/shop-page.component';
import { ItemPageComponent } from './pages/shop/item-page/item-page.component';
import { CartPageComponent } from './pages/shop/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "register", component: RegisterPageComponent},
  { path: "login", component: LoginPageComponent},
  { path: "shop", component: ShopPageComponent },
  { path: "shop/:id", component: ItemPageComponent},
  { path: "cart", component: CartPageComponent },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
