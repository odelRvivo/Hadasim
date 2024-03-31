import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HMOmemberService } from 'src/app/Service/hmomember.service';

@Component({
  selector: 'app-hmomember',
  templateUrl: './hmomember.component.html',
  styleUrls: ['./hmomember.component.css']
})
export class HMOmemberComponent {

constructor(public hmomemser:HMOmemberService,public r:Router){}
ngOnInit(): void {
this.hmomemser.gethmomembers();
}
delete(i:any){
this.hmomemser.delete(i);
}
getmoreditels(id:any){
this.hmomemser.gethmomembersbyid(id)
this.r.navigate(["/moreditels/"])

}
}
