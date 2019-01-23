import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  public carObj = {
    name: 'Jeep Wrangler',
    miliage: 0,
    tankVolume: 66,
    currentFuel: 3,
    specifications: [
      ' Engine capacity - 3,7 l',
      ' Max speed - 169 km/h',
      ' Acceleration 0-100km / h - 13,1 s',
      ' Fuel consumption: city - 10.2, highway - 7.7',
      ' Weight - 1945 kg'
    ]
  };

  public noFuel = false;
  public cantDrive = false;

  // Method - car rides, when clicked, vehicle mileage increases and gasoline decreases
  onClickDrive() {
    console.log('drive');
    --this.carObj.currentFuel;
    ++this.carObj.miliage;

    if (this.carObj.currentFuel <= 0) {
      this.noFuel = true;
      this.cantDrive = true;
    }
  }; 

  //Method - fill up, when you click to update the amount of gasoline
  onClickFillUp() {
    console.log('Fill up');
    if (this.carObj.currentFuel <= 0) {
      this.carObj.currentFuel += this.carObj.tankVolume;
      this.noFuel = false;
      this.cantDrive = false;
    } else if (this.carObj.currentFuel == this.carObj.tankVolume) {
      this.noFuel = false;
      this.cantDrive = false;
    }
  };
}
