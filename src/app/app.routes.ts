import {Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {ContactComponent} from "./modules/contact/contact.component";
import {AboutComponent} from "./modules/about/about.component";
import {ErrorComponent} from "./modules/error/error.component";
import {BlogComponent} from "./modules/blog/blog.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: '404', component: ErrorComponent},

  {path:'**' , redirectTo: '404'}

];
