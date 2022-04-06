import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    ThemeComponent,
    ThemeEditComponent,
    ThemeDeleteComponent,
    PostEditComponent,
    PostDeleteComponent,
    UserEditComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
