import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedComponent } from './pages/saved/saved.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { GridPostListComponent } from './components/grid-post-list/grid-post-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SearchComponent } from './components/search/search.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SavedComponent,
    AllUsersComponent,
    CreatePostComponent,
    HomeComponent,
    LoginComponent,
    PostDetailsComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateProfileComponent,
    AuthLayoutComponent,
    RootLayoutComponent,
    LeftSidebarComponent,
    ButtonComponent,
    InputTextComponent,
    GridPostListComponent,
    LoaderComponent,
    PostCardComponent,
    SearchComponent,
    TextareaComponent,
    TextButtonComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
