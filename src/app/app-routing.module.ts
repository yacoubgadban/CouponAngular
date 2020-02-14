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



const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'main', component: MainPageComponent ,canActivate:[] },
{ path: '', component: LoginComponent },
{ path: 'admin', component: AdminComponent},
{ path: 'admin/caddcompany', component: CaddcompanyComponent },
{ path: 'admin/CompanyList', component: CompanyListComponent },
{ path: 'admin/DeleteCompany', component: DeleteCompanyComponent },
{ path: 'admin/UpdateCompany/EditCompany', component: EditCompanyComponent },
{ path: 'admin/UpdateCompany', component:UpdateCompanyComponent  },
{ path: 'company', component:CompanyComponent  },
{ path: 'company/AddCoupon', component:AddCouponComponent  },
{ path: 'company/DeleteCoupon', component:DeleteCouponComponent  },
{ path: 'company/UpdateCoupon', component:UpdateCouponComponent  },
{ path: 'company/CouponList', component:CouponListComponent  },
{ path: 'company/UpdateCoupon/EditCompany', component:EditCouponComponent  },
{ path: 'admin/addClient', component:AddClientComponent  },
{ path: 'admin/deleteClient', component:DeleteClientComponent  },
{ path: 'admin/updateClient', component:UpdateClientComponent  },
{ path: 'admin/updateClient/editClient', component:EditClientComponent  },
{ path: 'admin/clientList', component:ClientListComponent }



]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
