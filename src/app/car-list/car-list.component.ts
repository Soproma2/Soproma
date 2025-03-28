import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule, CarCardComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    });
  }
}
