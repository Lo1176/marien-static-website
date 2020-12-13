// const initLetters = () => {
//   var textWrapper = document.querySelector('.moving-letters .letters');
//   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//   anime.timeline({loop: false})
//     .add({
//       targets: '.moving-letters .line',
//       opacity: [0.5,1],
//       scaleX: [0, 1],
//       easing: "easeInOutExpo",
//       duration: 700
//     }).add({
//       targets: '.moving-letters .line',
//       duration: 600,
//       easing: "easeOutExpo",
//       translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
//     }).add({
//       targets: '.moving-letters .logo-img',
//       opacity: [0,1],
//       scaleY: [0.5, 1],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: '-=600'
//     }).add({
//       targets: '.moving-letters .letters-left',
//       opacity: [0,1],
//       translateX: ["0.5em", 0],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: '-=300'
//     }).add({
//       targets: '.moving-letters .letters-right',
//       opacity: [0,1],
//       translateX: ["-0.5em", 0],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: '-=600'
//     });
// }
// initLetters();

// ------------ translation section ------------ //
// Language translation for YOU MARIEN
var language = {
  es: {
    bioTitle: "Hola!",
    bioContent: "This is the main title"
  },
  ca: {
    bioTitle: "Catalan!",
    bioContent: "Ceci est le titre principal"
  },
  fr: {
    bioTitle: "Bonjour, Je m’apelle Marién Garcia et j’habite à Barcelone!",
    bioContent: "J’ai commencé à faire du Hatha Yoga quand j’avais vingt trois ans mais j’ai arrêté, quelques années plus tard j’ai repris car je ressentais beaucoup d’instabilité dans ma vie, j’étais un peu perdue. La maternité et le travail m’epuisaient et je sentais par moments beaucoup d’angoisse, je n’étais pas bien ni physiquement ni mentalement, je devais faire un changement et j’avais l’intuition que le yoga pourrait m’aider.<br>Petit à petit j’ai repris la pratique et je sentais que j’avais besoin d’y aller même trois fois par semaine, ces cours m’apportaient une serenité, un calme spécial, je brillais à nouveau et je ressentait un épanouissement et une confiance totale en moi.<br>En 2015 j’ai fait la formation de professeur de Hatha Yoga à Yoga Studio Barcelona avec Xavier Solà et Pilar Ruberte et pendant deux années intenses j’ai fait beaucoup d’études et prattique regulière et intense, j’ai vécu une grande transformation au niveau personnel.<br>J’ai fait un changement important au niveau physique, mental et emmotionnel. C’est à ce point là que j’ai compris que le Yoga est le chemin vers la transformation. Puisque dans la vie le changement est constant et inminent et nous avons besoin de changer sans cesse pour pouvoir avancer et laisser la place aux nouvelles choses car le vieux, reste dans le passé.<br>Quand j’ai fini la formation, j’ai continué ma pratique, mes études et j’ai appris de façon autodidacte, ces dernières années j’ai eu l’occasion d’assister à de nombreuses formations et seminaires de professeurs magnifiques comme Tomás Zorzo, Danilo Hernández, Micheline Flak, Angelo Cecci, Susana Castro etc… Toutes ces connaissances et differentes approches m’ont beaucoup aidé à intégrer l’éssence du yoga traditionnel dans ma vie et pouvoir le transmettre lors de mes cours.<br>J’enseigne en géneral en espagnol mais aussi en catalan et français"
  }
};

// Define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#es") {
    bioTitle.textContent = language.es.bioTitle;
    title.textContent = language.es.maintitle;
  }
  else if (window.location.hash === "#ca") {
    bioTitle.textContent = language.ca.bioTitle;
    title.textContent = language.ca.maintitle;
  }
  else if (window.location.hash === "#fr") {
    bioTitle.textContent = language.fr.bioTitle;
    title.textContent = language.fr.maintitle;
  }
};

// I think that adding the hash to the url and reloading the page was happening at the same time thus the timeout for the reloadPage function.
function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}
