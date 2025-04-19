let input = document.querySelector("#input")
let buttons = document.querySelectorAll(".btn-sayi")
let buttonsResim = document.querySelectorAll(".btn-resim")
let nokta = document.querySelector("#nokta")



buttons.forEach(function(button){
    button.addEventListener("click",function(){
        input.value += button.textContent
        NoktaVarmi(input.value)
    })
})


buttonsResim.forEach(function(veri) {
    veri.addEventListener("click", function(tiklanan){
        let button = tiklanan.target
       if(button.id == "temizle"){
        input.value = ""
       }else if (button.id == "kalan" && SayiVarmi(input.value)){
        input.value += "%"
       }else if (button.id == "sil"){
        input.value = input.value.slice(0,(input.value.length - 1))
       }else if(button.id == "hesapla"){
        Hesapla(input.value);
       }else if(button.id == "bol" && SayiVarmi(input.value)){
        input.value += "÷"
       }else if(button.id == "carp" && SayiVarmi(input.value)){
        input.value += "X"
       }else if(button.id == "cikart" && SayiVarmi(input.value)){
        input.value += "－"
       }else if(button.id == "topla" && SayiVarmi(input.value)){
        input.value += "＋"
    }
       NoktaVarmi(input.value);
    })
})


function Hesapla(yazi){
    const sonuc = yazi.split("").reduce((sonuc,veri) =>{
        if(veri == "＋"){
            let [sayi, sayi2]  = yazi.split("＋").slice()
            return  Topla(parseFloat(sayi),parseFloat(sayi2))
        }else if(veri == "－"){
            let [sayi, sayi2]  = yazi.split("－").slice()
            return Cikar(parseFloat(sayi),parseFloat(sayi2))
        }else if(veri == "X"){
            let [sayi, sayi2]  = yazi.split("X").slice()
            return  Carp(parseFloat(sayi),parseFloat(sayi2))
        }else if(veri == "÷"){
            let [sayi, sayi2]  = yazi.split("÷").slice()
            return  Bol(parseFloat(sayi),parseFloat(sayi2))
        }else if(veri == "%"){
            let [sayi, sayi2]  = yazi.split("%").slice()
            return  Kalan(parseFloat(sayi),parseFloat(sayi2))
        }
        return sonuc
        
    },0)
    input.value = sonuc
}


function Topla(sayi1,sayi2){
    return sayi1 + sayi2
}
function Cikar(sayi1,sayi2){
    return sayi1 - sayi2
}
function Carp(sayi1, sayi2){
    return sayi1 * sayi2
}
function Bol(sayi1,sayi2){
    return sayi1 / sayi2
}
function Kalan(sayi1, sayi2){
    return sayi1 % sayi2
}

function NoktaVarmi(yazi){
    let tersVeri = yazi.split("").reverse().join("")
    let ayrilmisVeri = tersVeri.split(/[%\÷\X\－\＋]/)[0]
    
    if(ayrilmisVeri.includes(".") || ayrilmisVeri.length == 0){
        nokta.disabled = true
    }else{
        nokta.disabled = false
    }
}

function SayiVarmi(yazi){
    let tersVeri = yazi.split("").reverse().join("")
    let ayrilmisVeri = tersVeri.split(/[%\÷\X\－\＋]/)[0]
    
    if(/[0-9]/.test(ayrilmisVeri) && !/[%\÷\X\－\＋]/.test(tersVeri)){
       return true
    }else{
        return false
    }
}