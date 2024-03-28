import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { HMOmemberService } from 'src/app/Service/hmomember.service';
@Component({
  selector: 'app-add-hmomember',
  templateUrl: './add-hmomember.component.html',
  styleUrls: ['./add-hmomember.component.css']
})
export class AddHmomemberComponent {
   constructor(public hmomemberser:HMOmemberService){}
  addhmomember(first_name: string,last_name: string,id_num: string,day: string,month: string,year: string ,city: string,street: string,numhome: string,cell_phone: string,phone: string){
  this.hmomemberser.addhmomember(first_name,last_name,id_num,day,month,year,cell_phone,street,numhome,cell_phone,phone)
  }
}
