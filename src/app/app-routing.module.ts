import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { ThemeComponent } from './theme/theme.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'feed', component:FeedComponent},
  {path:'theme', component:ThemeComponent},
  {path: 'theme-edit/:id',component:ThemeEditComponent},
  {path: 'theme-delete/:id', component:ThemeDeleteComponent},
  {path: 'post-edit/:id', component:PostEditComponent},
  {path: 'post-delete/:id', component: PostDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
