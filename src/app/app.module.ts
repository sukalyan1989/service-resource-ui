import { AuthInterceptor } from './auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
import { AdminPostComponent } from './dashboard/admin-dashboard/admin-post/admin-post.component';
import { LoginMethodComponent } from './login-method/login-method.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationComponent,
    HeaderComponent,
    AdminPostComponent,
    LoginMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [{provide :HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
