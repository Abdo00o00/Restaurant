import { Routes } from '@angular/router';
import { BaseComponent } from './Views/Layout/base/base.component';
import { NotFoundComponent } from './Views/Layout/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { MenuComponent } from './Components/menu/menu.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ReservationComponent } from './Components/reservation/reservation.component';


export const routes: Routes = [
    // { path: 'login',component: authComponent}

    { path: '',component: BaseComponent,
        children:[
            {path: 'home',component:HomeComponent},
            {path: 'about',component:AboutComponent},
            {path: 'contact',component:ContactComponent},
            {path: 'blog',component:BlogsComponent},
            {path: 'menu',component:MenuComponent},
            {path: 'gallery',component:GalleryComponent},
            {path: 'gallery',component:GalleryComponent},
            {path: 'reservation',component:ReservationComponent},
        ]
    },
    {
        path:"**",component:NotFoundComponent
    }
];
