import { Routes } from '@angular/router';
import { BaseComponent } from './Views/Layout/base/base.component';
import { NotFoundComponent } from './Views/Layout/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    // { path: 'login',component: authComponent}

    { path: '',component: BaseComponent,
        children:[
            {
                path: 'home',
                component:HomeComponent
            },
            {
                path: 'about',
                component:AboutComponent
            },
            {
                path: 'contact',
                component:ContactComponent
            },
        ]
    },
    {
        path:"**",component:NotFoundComponent
    }
];
