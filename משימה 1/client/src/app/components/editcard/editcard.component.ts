import { Component } from '@angular/core';
import { HMOmemberService } from 'src/app/Service/hmomember.service';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.css']
})

export class EditcardComponent {
  constructor(public hmomemberser:HMOmemberService){}
  step=1

  value(){
    if(this.hmomemberser.listVaccination.length>=this.step){
    this.hmomemberser.date= this.hmomemberser.listVaccination[this.step-1].date;
    this.hmomemberser.manufacturer= this.hmomemberser.listVaccination[this.step-1].manufacturer;
    }
    else{
    this.hmomemberser.date=""
    this.hmomemberser.manufacturer=""
    }
  }

edit(){
  this.hmomemberser.edit();
}
left(){
  this.step=this.step-1
  this.value()
}
next(){
  this.step=this.step+1
  this.value()
}
editvaccination(){
  this.hmomemberser.editvaccination(this.step)
}
addvaccination(){

  this.hmomemberser.addvaccination(  this.hmomemberser.currenrHMOmember.id_num,this.step.toString(),this.hmomemberser.date,this.hmomemberser.manufacturer)
}
}
