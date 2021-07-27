import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photoList: any=[];
  photoListTable :any =[];
  text = 'Compare';
  constructor(
     private http:HttpServiceService
  ){
  }

  ngOnInit(){
       this.http.getData().subscribe((response)=>{
              this.photoList = response.slice(0, 3)
       }) 
   }

   addInTable(value){
    if((document.getElementById("btn-"+value.id).innerHTML) == 'Compare'){
      document.getElementById("btn-"+value.id).innerHTML = document.getElementById("btn-"+value.id).innerHTML == "Remove" ? "Compare" : "Remove";
       this.photoListTable.push(value)
      } else{
      document.getElementById("btn-"+value.id).innerHTML = document.getElementById("btn-"+value.id).innerHTML == "Remove" ? "Compare" : "Remove";
      var index = this.photoListTable.findIndex(function(o){
         return o.id === value.id;
    })
    if (index !== -1) this.photoListTable.splice(index, 1);
   }

   }
}
