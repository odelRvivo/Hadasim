import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditcardComponent } from '../components/editcard/editcard.component';

@Injectable({
  providedIn: 'root'
})
export class HMOmemberService {

  constructor(private http:HttpClient) { }
  day:any
year:any
month:any
date=""
manufacturer=""
  currenrHMOmember:any;
  allhmomembers:any[]=[];
  listVaccination:any[]=[];
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
  gethmomembersbyid(id:any){

    this.http.get<any>(`http://127.0.0.1:5000/HMOmember/${id}`).subscribe(
      data=>{this.currenrHMOmember=data
      this.day=data.birth_date.toString().substring(0,2)
      this.month=data.birth_date.toString().substring(3,5)
      this.year=data.birth_date.toString().substring(6,10)
   
      },err=>{
        console.log("eror")
      
    });


    this.http.get<any>(`http://127.0.0.1:5000/Vaccination/${id}`).subscribe(
      data=>{this.listVaccination=data
        this.listVaccination = this.listVaccination.sort((a, b) => a.i - b.i);
        if(this.listVaccination.length>0){
          this.date= this.listVaccination[0].date;
          this.manufacturer= this.listVaccination[0].manufacturer;
          }
          else{
          this.date=""
          this.manufacturer=""
          }
     console.log(data)
   
      },err=>{
        console.log("eror")
      
    });
   }
   delete(i:number) {
   this.http.delete(`http://127.0.0.1:5000/HMOmember/${i}`)
   .subscribe({
       next: data => {
           console.log("sucsses");
       },
       error: error => {
         
           console.error('There was an error!', error);
       }
   });



  }
  edit(){
    this.currenrHMOmember.birth_date=this.day+"-"+this.month+"-"+this.year
    console.log(JSON.stringify(this.currenrHMOmember))

    this.http.put<any>(`http://127.0.0.1:5000/HMOmember/${this.currenrHMOmember._id}`,this.currenrHMOmember).subscribe(
      suc=>alert("עודכן בהצלחה")
    )
  }
  editvaccination(step:number){
    this.listVaccination[step-1].data=this.date
    this.listVaccination[step-1].manufacturer=this.manufacturer
    this.http.put<any>(`http://127.0.0.1:5000/Vaccination/${this.listVaccination[step-1]._id}`,this.listVaccination[step-1]).subscribe(
      suc=>alert("עודכן בהצלחה")
    )
  }
  i=""
  id_HMO=""
  addvaccination(id_HMO:string,i:string,date:string,manufacturer:string){
    

    this.http.post("http://127.0.0.1:5000/Vaccination",{id_HMO,i,date,manufacturer}).subscribe(
  res =>{
     alert("נוסף בהצלחה");
     this.http.get<any>(`http://127.0.0.1:5000/Vaccination/${this.currenrHMOmember.id_num}`).subscribe(
      data=>{this.listVaccination=data
        this.listVaccination = this.listVaccination.sort((a, b) => a.i - b.i);
       
     console.log(data)
   
      },err=>{
        console.log("eror")
      
    });
    
  
   },
   err=>{
     console.log(err)} );

   }
  }
  
