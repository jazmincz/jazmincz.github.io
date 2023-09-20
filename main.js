let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #6e6181;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #6e6181;"> Soy una estudiante de Ingeniería Telemática. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
