let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "Primer aprenda a informatica y toda la teoria. Acto seguido dessarrolle un estilo de programacion.Luego olvidese de todo eso y solo hackee" <br> -George Carrete')
.pauseFor(200)
.deleteCharts(10)
.start();
