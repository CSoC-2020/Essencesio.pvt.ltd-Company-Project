import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderMobileComponent } from './app-header-mobile/app-header-mobile.component';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatCardModule, } from '@angular/material';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
