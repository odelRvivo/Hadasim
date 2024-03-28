import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HMOmemberService {

  constructor(private http:HttpClient) { }

  allhmomembers:any[]=[];
  addhmomember(first_name: string,last_name: string,id_num: string,day: string,month: string,year: string ,city: string,street: string,numhome: string,cell_phone: string,phone: string){
    const birth_date=day+"-"+month+"-"+year
this.http.post("http://127.0.0.1:5000/HMOmember",{first_name,last_name,id_num,city,street,numhome,birth_date,cell_phone,phone}).subscribe(
  res =>{
     alert("נוסף בהצלחה");
    
  
   },
   err=>{
     console.log(err)} );

   }
   gethmomembers(){

  this.http.get<any[]>("http://127.0.0.1:5000/HMOmember").subscribe(
    data=>this.allhmomembers=data
  )
   }
  


   delete(i:number) :Observable <boolean>{
    alert(i)
    return this.http.delete<boolean>(`http://127.0.0.1:5000/HMOmember/${i}`);
}
  }
