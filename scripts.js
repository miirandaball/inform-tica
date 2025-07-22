document.getElementById("formulario-voluntario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Gracias por sumarte como voluntario/a! Nos pondremos en contacto pronto.");
  this.reset();
});
