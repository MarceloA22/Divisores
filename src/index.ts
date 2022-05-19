let data1: number = Number(prompt("Ingrese un número entero"));
let data2: number = 1;
let vuelta: number = 0;
for (data2; data2 <= data1; data2++) {
  if (data1 % data2 === 0) {
    vuelta = data2 / data2 + vuelta * 1;
  }
}
console.log("El número " + data1 + " tiene " + vuelta + " divisores");
