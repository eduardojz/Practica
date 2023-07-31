function imprimirEdades(nombres, edades) {
  if (nombres.length === edades.length) {
    for (let i = 0; i < nombres.length; i++) {
      console.log("Mi nombre es ", nombres[i], " y tengo ", edades[i], " años");
    }
  }else{
    console.log('the arrays are not the same length');
  }
}
const nombres = ["pericles", "morticia", "Tio cosa"];
const edades = [55, 77, 89];
imprimirEdades(nombres, edades);
