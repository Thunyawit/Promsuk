import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { MizunoComponent } from './mizuno/mizuno.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriesComponent } from './comaponents/manage/categories/categories.component';
import { CategoryFormComponent } from './comaponents/manage/category-form/category-form.component';
import { CategoriseComponent } from './comaponents/manage/categorise/categorise.component';
import { CatagoryFormComponent } from './comaponents/manage/catagory-form/catagory-form.component';


const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  
  // เส้นทางอื่นๆ

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    NikeComponent,
    AdidasComponent,
    MizunoComponent,
    LoginComponent,
    CheckoutComponent,
    CategoriesComponent,
    CategoryFormComponent,
    CategoriseComponent,
    CatagoryFormComponent // เพิ่มที่นี่
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
