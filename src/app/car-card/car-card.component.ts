import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  image1: string;
  image2: string;
  image3: string;
  price: number;
  multiplier: number;
  capacity: number;
  transmission: string;
  createdBy: string;
  createdByEmail: string;
  fuelCapacity: number;
  city: string;
  latitude: number;
  longitude: number;
  ownerPhoneNumber: string;
}

@Component({
  selector: 'app-car-card',
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input() car!: Car;
}
