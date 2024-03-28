import { Component } from '@angular/core';
import { HMOmemberService } from 'src/app/Service/hmomember.service';

@Component({
  selector: 'app-hmomember',
  templateUrl: './hmomember.component.html',
  styleUrls: ['./hmomember.component.css']
})
export class HMOmemberComponent {

constructor(public hmomemser:HMOmemberService){}
ngOnInit(): void {
this.hmomemser.gethmomembers();
}
delete(i:any){
this.hmomemser.delete(i);
}
}
