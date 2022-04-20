import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var avgSeasonNumber = document.getElementById('avg-seasons');
var seriesCardDiv = document.getElementById('card-series');
var nameButtons = document.getElementsByClassName('btn-serie-name'); // colección de botones para
// todas las posibles series.
renderCoursesInTable(dataSeries);
avgSeasonNumber.innerHTML = "".concat(calculateAvgSeasonsNumber(dataSeries));
var _loop_1 = function (i) {
    nameButtons[i].addEventListener("click", function () {
        clearSerieCard();
        renderSerieCard(dataSeries[i]);
    });
};
/**
 * En este loop, se crea un eventListener para los botones,
 * cuando se da click, se limpian los hijos de ese nodo
 * (se quita la tarjeta que estaba siendo mostrada) y se
 * muestra la del botón que le acaban de dar click.
 */
for (var i = 0; i < nameButtons.length; i++) {
    _loop_1(i);
}
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><button class='btn-serie-name'>").concat(serie.name, "</button></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calculateAvgSeasonsNumber(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function renderSerieCard(serie) {
    console.log('Desplegando tarjeta');
    var divElement = document.createElement("div");
    divElement.innerHTML = "<img class='card-img-top' src=\"".concat(serie.image, "\" alt='image-serie-").concat(serie.name, "'>\n                                <div class='card-body'>\n                                    <h5 class='card-title'>").concat(serie.name, "</h5>\n                                    <p class='card-text'>").concat(serie.description, "</p>\n                                    <a href=\"").concat(serie.review, "\">").concat(serie.review, "</a>\n                                </div>");
    seriesCardDiv.appendChild(divElement);
}
function clearSerieCard() {
    while (seriesCardDiv.hasChildNodes()) {
        if (seriesCardDiv.firstChild != null) {
            seriesCardDiv.removeChild(seriesCardDiv.firstChild);
        }
    }
}
