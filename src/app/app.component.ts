import { Component } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private serviceService: ServiceService
    ) { }

    age:any =2 ;
    sex:any =1 ;
    cp:any =0 ; 
    trestbps:any =160 ;
    chol:any =286 ;
    fbs:any =0 ;
    restecg:any =0 ;
    thalach:any =108 ;
    exang:any =1 ;
    oldpeak:any =1.5 ;
    slope:any =1 ;
    ca:any =3 ;
    thal:any =2 ;
    
  formValue:any;
  
  onSubmit(form: any){
    this.formValue=form.value;
    console.log(form.value);

    this.gettarget(form.value);
  }

  data:any; 
  message:any;
  gettarget(data: any) {
    return this.serviceService.predicttarget(data).subscribe((response: {}) => {
      let data: any = response;
      this.data=data;
      
      console.log(response);
      if(this.data.message=="1")
      {
        this.message="you have heart disease"
        console.log(this.data.message)
      }
      else{
        this.message="you don't have heart disease"
        console.log(this.data.message)
      }
    });
  }

}
