import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries:any
  country:any
  Confirmed:Number
  Recovered:Number
  Deaths:Number
  Date:Date
  Active:Number
  Country:String
  TotalConfirmed:Number
  TotalDeaths:Number
  TotalRecovered:Number


  constructor(private coronaService:CoronaService){}

  ngOnInit(){
    this.coronaService.getCountries().subscribe((data)=>{
    console.log(data)
    this.countries = data
    })

    this.getworldtotal()
  }

  // Total confirmed ,deaths and recovered details 
  getworldtotal(){
    this.coronaService.getTotal().subscribe((data)=>{
      console.log(data)
      
      this.TotalConfirmed = data.TotalConfirmed
      this.TotalDeaths = data.TotalDeaths
      this.TotalRecovered = data.TotalRecovered
    })
  }
  // Submit button fetched the data country wise
  getCoronaData(){
    this.coronaService.getCoronaRealData(this.country).subscribe((data)=>{
      console.log(data)

      var index = data.length - 1
      this.Confirmed = data[index].Confirmed
      this.Recovered = data[index].Recovered
      this.Deaths = data[index].Deaths
      this.Date = data[index].Date
      this.Active = data[index].Active
      this.Country = data[index].Country
    })
  }


  // dropdown country data
  getCountry(country:any){
    this.country = country
  }

 
}
