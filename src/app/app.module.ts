import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderMobileComponent } from './app-header-mobile/app-header-mobile.component';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
  MatTabsModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { CategoriesComponent } from './app-header-mobile/categories/categories.component';
import { CustomAutoFocusDirective } from './custom-auto-focus.directive';
import { BottomNavComponent } from './app-header-mobile/bottom-nav/bottom-nav.component';
import { DesktopComponent } from './desktop/desktop.component';
import { HomeComponent } from './desktop/home/home.component';
import { LoginComponent } from './desktop/login/login.component';
import { EmailLoginComponent } from './desktop/login/email-login/email-login.component';
import { LoginMobileComponent } from './app-header-mobile/login-mobile/login-mobile.component';
import { EmailLoginMobileComponent } from './app-header-mobile/login-mobile/email-login-mobile/email-login-mobile.component';
import { UserProfileComponent } from './desktop/user-profile/user-profile.component';
import { UserInfoComponent } from './desktop/user-profile/user-info/user-info.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserProfileMobileComponent } from './app-header-mobile/user-profile-mobile/user-profile-mobile.component';
import { UserCredentialsComponent } from './app-header-mobile/user-profile-mobile/user-info/user-credentials/user-credentials.component';
import { UserInformationComponent } from './app-header-mobile/user-profile-mobile/user-info/user-information/user-information.component';
import { EditProfileComponent } from './desktop/user-profile/edit-profile/edit-profile.component';
import { AuthInterceptor } from './auth-interceptor';
import { UserEditMobileComponent } from './app-header-mobile/user-profile-mobile/user-edit-mobile/user-edit-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppHeaderMobileComponent,
    CategoriesComponent,
    CustomAutoFocusDirective,
    BottomNavComponent,
    DesktopComponent,
    HomeComponent,
    LoginComponent,
    EmailLoginComponent,
    LoginMobileComponent,
    EmailLoginMobileComponent,
    UserProfileComponent,
    UserInfoComponent,
    UserProfileComponent,
    UserProfileMobileComponent,
    UserCredentialsComponent,
    UserInformationComponent,
    EditProfileComponent,
    UserEditMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
