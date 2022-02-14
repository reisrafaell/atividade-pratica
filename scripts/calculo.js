export default function calculo(){

    const peso = document.querySelector('#peso')
    const resulPeso = document.querySelector('#resultPeso')    
    const altura = document.querySelector('#altura')
    const resultAltura = document.querySelector('#resulAltura')
    const button = document.querySelector('#button')
    const result = document.querySelector('#resultado')
    let imc = 0 

    

   peso.oninput = function(){
    resulPeso.innerHTML = peso.value
   }
   altura.oninput = function(){
       resultAltura.innerHTML = altura.value/100
   }
 
    button.addEventListener('click', ()=>{
        let imc = peso.value/(altura.value*2)
        console.log(imc*100)
        //imc = peso.value /(altura.value**)*100
       // console.log(imc)
       let resposta =''
       if(imc < 18.5){
           resposta = 'Abaixo do peso'
        }else if(imc > 18.5 || imc < 24.9){
            resposta = ' Peso Normal'
        }else if(imc > 25 || imc < 29.9){
            resposta = 'Sobrepeso'
        }else if (imc > 30 || imc< 34.9){
            resposta =" Obesidade Grau I"
        }else if(imc> 35 || imc < 34.9 ){
            resposta = 'Obesidade Grau II'
        }else if(imc >= 40){
            resposta="Obesidade Mórbida"
        } 
        result.textContent = `IMC: ${imc} ${resposta}`

    })


}