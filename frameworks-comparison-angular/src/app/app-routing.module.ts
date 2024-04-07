import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedComponent } from './pages/saved/saved.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { HomeComponent } from './pages/home/home.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RootLayoutComponent,
    // canActivate: [AuthGuard], // użyj canActivate dla ochrony tras
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'saved', component: SavedComponent },
      { path: 'all-users', component: AllUsersComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'posts/:id', component: PostDetailsComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'update-profile/:id', component: UpdateProfileComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'sign-in', component: LoginComponent },
      { path: 'sign-up', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
