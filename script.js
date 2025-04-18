let input = document.querySelector("#input")
let buttons = document.querySelectorAll(".btn-sayi")
let buttonsResim = document.querySelectorAll(".btn-resim")
let nokta = document.querySelector("#nokta")


function noktaVarmi(){

    let tersVeri = input.value.split("").reverse().join("")
    let ayrilmisVeri = tersVeri.split(/[%\÷\X\－\＋]/)[0]
    


    if(ayrilmisVeri.includes(".")){
        nokta.disabled = true
    }else{
        nokta.disabled = false
    }

}

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        input.value += button.textContent
     
        noktaVarmi()
    })
})


buttonsResim.forEach(function(veri) {
    veri.addEventListener("click", function(tiklanan){
        let button = tiklanan.target
        
       if(button.id == "temizle"){
        input.value = ""
       }else if (button.id == "kalan"){
        input.value += "%"
       }else if (button.id == "sil"){
        input.value = input.value.slice(0,(input.value.length - 1))
       }else if(button.id == "hesapla"){

       }else if(button.id == "bol"){
        input.value += "÷"
       }else if(button.id == "carp"){
        input.value += "X"
       }else if(button.id == "cikart"){
        input.value += "－"
       }else if(button.id == "topla"){
        input.value += "＋"
       }
       noktaVarmi();

    })
})