import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHmomemberComponent } from './components/add-hmomember/add-hmomember.component';
import { CoronainformationComponent } from './components/coronainformation/coronainformation.component';
import { EditcardComponent } from './components/editcard/editcard.component';
import { HMOmemberComponent } from './components/hmomember/hmomember.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'coronainformation', component: CoronainformationComponent },


  { path: 'allhmomember', component: HMOmemberComponent },
       {path:'moreditels',component:EditcardComponent},
  { path: 'addhmomember', component: AddHmomemberComponent },


  // { path: 'alltrips', component: AlltripsComponent ,children:[
  //   {path:'order/:id',component:OrderComponent},]},
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
