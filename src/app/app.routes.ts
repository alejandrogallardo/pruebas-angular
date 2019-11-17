import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PruebaComponent } from './components/prueba/prueba.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'api', component: PruebaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});