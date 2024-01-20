import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parametro } from '../models/parametro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputs-viaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inputs-viaje.component.html',
  styleUrl: './inputs-viaje.component.scss'
})
export class InputsViajeComponent implements OnInit {

  parametroList: Parametro[] = [];
  costo_final: number | undefined;

  ngOnInit(): void {
    //this.parametroList = localStorage.getItem('parametro') ? JSON.parse(localStorage.getItem('parametro')!): []
    
  }

  OnSubmit(formValue: Parametro){
    
    this.parametroList.push(formValue)
    //localStorage.setItem('parametro', JSON.stringify(this.parametroList))
    console.log(formValue)

    if (formValue.KmXGalon == 0 || formValue.DistKil == 0) {
      window.alert('Error: Por favor llene todos los datos o verifique que esten correctamente digitados');
     
    }
    else {
    
      const consumo_gasolina = formValue.DistKil / formValue.KmXGalon;
      console.log('El consumo de gasolina del vehiculo será: ', consumo_gasolina);

      const precio_gasolina = consumo_gasolina * formValue.CostoGalon;
      console.log('El precio de la gasolina necesaria para elviaje es: ', precio_gasolina);

      const tiempo_viaje = formValue.DistKil / 60;
      if(tiempo_viaje >= 12){
        window.alert('Probablemente el viaje dure mas de 12 horas, por favor considere tomar descansos')
      }
      console.log('Tiempo deviaje en horas: ', tiempo_viaje)

      const costo_peajes = formValue.CantPeajes * formValue.CostoPeaje
      console.log('El valor de los peajes es: ', costo_peajes)

      this.costo_final = precio_gasolina + costo_peajes;
      console.log('El costo total del viaje es de: $', this.costo_final)
  }
    
  }

 
  
    
  }

  
