import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'menu', component:MenuComponent},
    {path:'menu/:id', component:MenuPageComponent}
];
