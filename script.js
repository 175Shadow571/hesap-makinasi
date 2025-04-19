let input = document.querySelector("#input")
let buttons = document.querySelectorAll(".btn-sayi")
let buttonsResim = document.querySelectorAll(".btn-resim")
let nokta = document.querySelector("#nokta")
let inputSonuc = document.querySelector("#inputSonuc")


function noktaVarmi(){
    let tersVeri = input.value.split("").reverse().join("")
    let ayrilmisVeri = tersVeri.split(/[%\÷\X\－\＋]/)[0]
    
    if(ayrilmisVeri.includes(".") || ayrilmisVeri.length == 0){
        nokta.disabled = true
    }else{
        nokta.disabled = false
    }
}




function sayiVarmi(){
    let tersVeri = input.value.split("").reverse().join("")
    let ayrilmisVeri = tersVeri.split(/[%\÷\X\－\＋]/)[0]
    
    if(/[0-9]/.test(ayrilmisVeri)){
       return true
    }else{
        return false
    }
}



buttons.forEach(function(button){
    button.addEventListener("click",function(){
        input.value += button.textContent
        noktaVarmi()
    })
})

let sayi = 0;
let arrr = [];

buttonsResim.forEach(function(veri) {
    veri.addEventListener("click", function(tiklanan){
        let button = tiklanan.target
       if(button.id == "temizle"){
        input.value = ""
       }else if (button.id == "kalan"){
        if(sayiVarmi()){input.value += "%"}
        
       }else if (button.id == "sil"){
        input.value = input.value.slice(0,(input.value.length - 1))
       }else if(button.id == "hesapla"){
        hesapla();
       }else if(button.id == "bol"){
        if(sayiVarmi()){input.value += "÷"}
        
       }else if(button.id == "carp"){
        if(sayiVarmi()){input.value += "X"}
        
       }else if(button.id == "cikart"){
        if(sayiVarmi()){input.value += "－"}
        
       }else if(button.id == "topla"){
        if(sayiVarmi()){input.value += "＋"}
        
        arrr.push(input.value.slice(sayi,(input.value.length - 1)))
        sayi = input.value.length
        console.log(arrr);
        
       }
       noktaVarmi();

    })
})

// %  ÷    let input = document.querySelector("#input")

function hesapla(){

    arrr.reduce((topam, veri) =>{
        console.log(veri);
        
    },0)

    const sonuc = input.value.split("").reduce((sonuc,veri) =>{


        


        if(veri == "＋"){
            let [sayi, sayi2]  = input.value.split("＋").slice()
           
            return  parseInt(sayi) + parseInt(sayi2)
        }else if(veri == "－"){

        }else if(veri == "X"){

        }
        return sonuc
        
    },0)
    input.value = sonuc
}