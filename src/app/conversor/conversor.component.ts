import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
txtBtn : string = "Medida: ";
txtBtn2 : string = "Medida: ";
valorConverter : number = 0;
valorConvertido : number = 0;

//Todas as medidas serão lastreadas pelo Km
valorMetro : number = 1000;
valorCm : number = 100000;
valorKm : number = 1;
valorMilhas : number = 0.621371;
valorPe : number = 3280;
valorPolegada : number = 39370;

converter(){
  if(this.txtBtn == "Medida: " || this.txtBtn2 == "Medida: "){
    alert("Selecione as duas medidas antes de tentar converter!");
  }
  else{
    let num1 : number = 0;
    let num2 : number = 0;
    let valConversao : number = 0;

    if(this.txtBtn == "Medida: Metro"){
      num1 = this.valorMetro;
    }
    else if(this.txtBtn == "Medida: Centímetro"){
      num1 = this.valorCm;
    }
    else if(this.txtBtn == "Medida: Polegada"){
      num1 = this.valorPolegada;
    }
    else if(this.txtBtn == "Medida: Pés"){
      num1 = this.valorPe;
    }
    else if(this.txtBtn == "Medida: Quilômetro"){
      num1 = this.valorKm;
    }
    else if(this.txtBtn == "Medida: Milhas"){
      num1 = this.valorMilhas;
    }
    else{
      alert('Erro');
    }

    if(this.txtBtn2 == "Medida: Metro"){
      num2 = this.valorMetro;
    }
    else if(this.txtBtn2 == "Medida: Centímetro"){
      num2 = this.valorCm;
    }
    else if(this.txtBtn2 == "Medida: Polegada"){
      num2 = this.valorPolegada;
    }
    else if(this.txtBtn2 == "Medida: Pés"){
      num2 = this.valorPe;
    }
    else if(this.txtBtn2 == "Medida: Quilômetro"){
      num2 = this.valorKm;
    }
    else if(this.txtBtn2 == "Medida: Milhas"){
      num2 = this.valorMilhas;
    }
    else{
      alert('Erro');
    }

    valConversao = num1/num2;

    this.valorConvertido = this.valorConverter / valConversao;
  }
}

selecionarMedida(medida : number, campo : number){
  let textoMedida : string = "";

  if(medida == 1){
    textoMedida = "Metro";
  }
  else if(medida == 2){
    textoMedida = "Centímetro";
  }
  else if(medida == 3){
    textoMedida = "Polegada";
  }
  else if(medida == 4){
    textoMedida = "Pés";
  }
  else if(medida == 5){
    textoMedida = "Quilômetro";
  }
  else if(medida == 6){
    textoMedida = "Milhas";
  }
  else{
    alert("Erro ao selecionar medida");
  } 
  
  if(campo == 1){
    this.txtBtn = "Medida: " + textoMedida;
  }
  else{
    this.txtBtn2 = "Medida: " + textoMedida;
  }
}
}
