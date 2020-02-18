import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import {FormsModule }from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CaddcompanyComponent } from './components/caddcompany/caddcompany.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { CompanyComponent } from './components/company/company.component';
import { DeleteCouponComponent } from './components/delete-coupon/delete-coupon.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { EditCouponComponent } from './components/edit-coupon/edit-coupon.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    CaddcompanyComponent,
    CompanyListComponent,
    DeleteCompanyComponent,
    UpdateCompanyComponent,
    EditCompanyComponent,
    CompanyComponent,
    DeleteCouponComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    EditCouponComponent,
    CouponListComponent,
    AddClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    EditClientComponent,
    ClientListComponent,
    MainPageComponent,
    RegisterComponent,
    ClientRegisterComponent,
    CompanyRegisterComponent,
    AddCategoryComponent,
    CategoryListComponent,
    DeleteCategoryComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
