btnConvert=document.querySelectorAll(".btn-convert")

btnConvert.forEach(function(item){
    item.onclick=function(){
        optIn=this.getAttribute("id").replace('btn-', '');
        console.log(optIn)
        let valTemp=document.querySelector("#"+"in-"+optIn).value
        //document.querySelector("#"+"in-"+optIn).value=""
        console.log(valTemp)
        
        if(optIn=="celcius"){
            document.querySelector("#in-fahrenheits").value=valTemp*1.8 + 32
            document.querySelector("#in-kelvin").value=valTemp+273
            document.querySelector("#"+"in-rankine").value=valTemp*1.8 + 491,67
        }else if(optIn=="fahrenheits"){
            valTemp=(valTemp-32)/1.8
            console.log(valTemp)
            document.querySelector("#in-celcius").value=valTemp
            document.querySelector("#in-kelvin").value=valTemp+273
            document.querySelector("#in-rankine").value=valTemp*1.8 + 491,67
        }else if(optIn=="kelvin"){
            valTemp=valTemp-273
            document.querySelector("#in-fahrenheits").value=valTemp*1.8 + 32
            document.querySelector("#in-celcius").value=valTemp
            document.querySelector("#"+"in-rankine").value=valTemp*1.8 + 491,67
        }else if(optIn=="rankine"){
            valTemp=(valTemp-491)/1.8
            document.querySelector("#in-fahrenheits").value=valTemp*1.8 + 32
            document.querySelector("#in-kelvin").value=valTemp+273
            document.querySelector("#"+"in-celcius").value=valTemp
        }
    }
});
