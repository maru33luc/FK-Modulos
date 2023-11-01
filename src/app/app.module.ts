import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './components/shop/hero/hero.component';
import { CollectionComponent } from './components/shop/collection/collection.component';
import { SliderGlideComponent } from './components/shop/slider-glide/slider-glide.component';
import { ShopPageComponent } from './pages/shop/shop-page/shop-page.component';
import { ShopAsideComponent } from './components/shop/shop-aside/shop-aside.component';
import { ShopMainComponent } from './components/shop/shop-main/shop-main.component';
import { ItemPageComponent } from './pages/shop/item-page/item-page.component';
import { ItemComponent } from './components/shop/item/item.component';
import { CartPageComponent } from './pages/shop/cart-page/cart-page.component';
import { CartComponent } from './components/shop/cart/cart.component';



import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/shared/login-form/login-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/shared/register-form/register-form.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HeroComponent,
    CollectionComponent,
    SliderGlideComponent,
    ShopPageComponent,
    ShopAsideComponent,
    ShopMainComponent,
    ItemPageComponent,
    ItemComponent,

    
    ItemPageComponent,
    ItemComponent,
    CartPageComponent,
    CartComponent,
    
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"funkostore-b44e7","appId":"1:599703726366:web:dc176fcc201097bd2fc10f","storageBucket":"funkostore-b44e7.appspot.com","apiKey":"AIzaSyDtU1Rdh5mZXb5OFL9KWJetYtfi8hcJfE0","authDomain":"funkostore-b44e7.firebaseapp.com","messagingSenderId":"599703726366","measurementId":"G-QFY4FKRWLQ"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
   AngularFireModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }