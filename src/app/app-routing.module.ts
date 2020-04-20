import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './desktop/login/login.component';
import { HomeComponent } from './desktop/home/home.component';
import { EmailLoginComponent } from './desktop/login/email-login/email-login.component';
import { LoginMobileComponent } from './app-header-mobile/login-mobile/login-mobile.component';
import { EmailLoginMobileComponent } from './app-header-mobile/login-mobile/email-login-mobile/email-login-mobile.component';
import { UserProfileComponent } from './desktop/user-profile/user-profile.component';
import { UserInfoComponent } from './desktop/user-profile/user-info/user-info.component';
import { CategoriesComponent } from './app-header-mobile/categories/categories.component';
import { UserProfileMobileComponent } from './app-header-mobile/user-profile-mobile/user-profile-mobile.component';
import { UserCredentialsComponent } from './app-header-mobile/user-profile-mobile/user-info/user-credentials/user-credentials.component';
import { UserInformationComponent } from './app-header-mobile/user-profile-mobile/user-info/user-information/user-information.component';
import { EditProfileComponent } from './desktop/user-profile/edit-profile/edit-profile.component';
import { UserEditMobileComponent } from './app-header-mobile/user-profile-mobile/user-edit-mobile/user-edit-mobile.component';
import { CreateComponent } from './create/create.component';
import { HomeMobileComponent } from './app-header-mobile/home-mobile/home-mobile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'user', component: UserProfileComponent, children: [{path: '', component: UserInfoComponent, outlet: 'user-info'}]},
  {path: 'login/email', component: EmailLoginComponent, pathMatch: 'full'},
  {path: 'mobile/login', component: LoginMobileComponent, pathMatch: 'full'},
  {path: 'mobile/login/email', component: EmailLoginMobileComponent, pathMatch: 'full'},
  {path: 'mobile/user', component: UserProfileMobileComponent, pathMatch: 'full'},
  {path: 'mobile/user/profile', component: UserCredentialsComponent, pathMatch: 'full',
  children: [{path: '', component: UserInformationComponent, outlet: 'user-information'}] },
  {path: 'user/edit', component: EditProfileComponent, pathMatch: 'full', children:
  [{path: '', component: UserInfoComponent, outlet: 'user-info'}]},
  {path: 'mobile/user/edit', component: UserEditMobileComponent, pathMatch: 'full'},
  {path: 'create', component: CreateComponent, pathMatch: 'full'},
  {path: 'mobile/home', component: HomeMobileComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
