import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', 
    canActivate: [AuthGuard]
  },
  { 
    path: 'chat/:id', 
    loadChildren: './chat/chat.module#ChatPageModule', 
    canActivate: [AuthGuard] 
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { 
    path: 'users-list', 
    loadChildren: './users-list/users-list.module#UsersListPageModule', 
    canActivate: [AuthGuard]  
  },
  { 
    path: 'settings', 
    loadChildren: './settings/settings.module#SettingsPageModule', 
    canActivate: [AuthGuard]  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
