import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'setting', component: SettingComponent}
];
