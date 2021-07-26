import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testdeploy';
  photoList: any=[];
  photoListTable :any =[];
  toggle = true;
  text = 'Compare';
  constructor(
     private http:HttpServiceService
  ){
  }

  ngOnInit(){
       this.http.getData().subscribe((response)=>{
              console.log("this is response",response.slice(0, 10))
              this.photoList = response.slice(0, 3)
       }) 
   }

   addInTable(value){
    document.getElementById("btn-"+value.id).innerHTML = document.getElementById("btn-"+value.id).innerHTML == "Remove" ? "Compare" : "Remove";
       this.photoListTable.push(value)
   }
}