import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CaddcompanyComponent } from './components/caddcompany/caddcompany.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { CompanyComponent } from './components/company/company.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { DeleteCouponComponent } from './components/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { EditCouponComponent } from './components/edit-coupon/edit-coupon.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminGuardService } from './services/admin-guard.service';
import { AdminServicesService } from './services/admin-services.service';
import { LoginService } from './services/login.service';
import { LoginResult } from './models/Users/LoginResult';
import { ClientGuardService } from './services/client-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';



const routes: Routes = [
{ path: 'register', component: RegisterComponent},
{ path: 'clientreg', component: ClientRegisterComponent},
{ path: 'companyreg', component: CompanyRegisterComponent},
{ path: 'login', component: LoginComponent },
{ path: 'main', component: MainPageComponent ,canActivate:[ClientGuardService] },
{ path: '', redirectTo:'/login' ,pathMatch:'full' },
{ path: 'admin', component: AdminComponent ,canActivate:[AdminGuardService]},
{ path: 'admin/caddcompany', component: CaddcompanyComponent ,canActivate:[AdminGuardService] },
{ path: 'admin/CompanyList', component: CompanyListComponent,canActivate:[AdminGuardService] },
{ path: 'admin/DeleteCompany', component: DeleteCompanyComponent ,canActivate:[AdminGuardService]},
{ path: 'admin/UpdateCompany/EditCompany', component: EditCompanyComponent,canActivate:[AdminGuardService] },
{ path: 'admin/UpdateCompany', component:UpdateCompanyComponent ,canActivate:[AdminGuardService] },
{ path: 'company', component:CompanyComponent ,canActivate:[CompanyGuardService]  },
{ path: 'company/AddCoupon', component:AddCouponComponent ,canActivate:[CompanyGuardService] },
{ path: 'company/DeleteCoupon', component:DeleteCouponComponent ,canActivate:[CompanyGuardService] },
{ path: 'company/UpdateCoupon', component:UpdateCouponComponent ,canActivate:[CompanyGuardService] },
{ path: 'company/CouponList', component:CouponListComponent ,canActivate:[CompanyGuardService] },
{ path: 'company/UpdateCoupon/EditCompany', component:EditCouponComponent ,canActivate:[CompanyGuardService] },
{ path: 'admin/addClient', component:AddClientComponent ,canActivate:[AdminGuardService] },
{ path: 'admin/deleteClient', component:DeleteClientComponent  ,canActivate:[AdminGuardService]},
{ path: 'admin/updateClient', component:UpdateClientComponent ,canActivate:[AdminGuardService] },
{ path: 'admin/updateClient/editClient', component:EditClientComponent ,canActivate:[AdminGuardService] },
{ path: 'admin/clientList', component:ClientListComponent ,canActivate:[AdminGuardService]},
{ path: 'admin/addCategory', component:AddCategoryComponent ,canActivate:[AdminGuardService] },
{ path: 'admin/deleteCategory', component:DeleteCategoryComponent  ,canActivate:[AdminGuardService]},
{ path: 'admin/categoryList', component:CategoryListComponent ,canActivate:[AdminGuardService]}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
