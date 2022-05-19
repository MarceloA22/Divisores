let data: number = Number(prompt("Ingrese un número entero"));
let contador: number = 1;
let vuelta: number = 0;
for (contador; contador <= data; contador++) {
  if (data % contador === 0) {
    //console.log("los números multiplos son " + contador);
    vuelta = contador / contador + vuelta * 1;
  }

  //console.log( "el número " + data + " es múltiplo de " + data + ":" +contador);
}
console.log("El número " + data + " tiene " + vuelta + " divisores");
