import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'setting', component: SettingComponent},
	{ path: 'note', component: NoteComponent},
];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }