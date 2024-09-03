import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { MizunoComponent } from './mizuno/mizuno.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nike', component: NikeComponent},
  { path: 'adidas', component: AdidasComponent},
  { path: 'mizuno', component: MizunoComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }