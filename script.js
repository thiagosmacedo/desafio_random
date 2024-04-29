function generateNumbers() {
  const min = Math.ceil(document.querySelector(".minimo").value)
  const max = Math.floor(document.querySelector(".maximo").value)



  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  const alerta = document.getElementById("winner")


  if (max > min) {
    alerta.innerHTML = "Número " + result

  } else {
    alert("O número tem que ser MAIOR que o minimo")
  }



  //console.log(result);
}

