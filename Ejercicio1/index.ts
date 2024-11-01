
function tamaño () {
    const palabra : string = (<HTMLInputElement> document.getElementById ('data')).value;
    const tamaño = palabra.length;
    console.log(tamaño);
    
    var letra:string = "";

    if(tamaño % 3 ==0){
        for(let i =0; i < tamaño ; i ++){
            if(i %2 ==0){
                letra += palabra.charAt(i).toLocaleUpperCase();
            }else{
                letra += palabra.charAt(i).toLocaleLowerCase();
            }
            console.log(letra);
  
        }

    }else{
        alert("No divisible por 3")
    }
}