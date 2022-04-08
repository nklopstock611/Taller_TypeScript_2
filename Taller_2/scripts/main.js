import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var seriesCardDiv = document.getElementById('card-series');
var avgSeasonNumber = document.getElementById('avg-seasons');
renderCoursesInTable(dataSeries);
avgSeasonNumber.innerHTML = "".concat(calculateAvgSeasonsNumber(dataSeries));
renderSerieCard(dataSeries);
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><a href=\"").concat(serie.review, "\">").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderSerieCard(series) {
    console.log('Desplegando tarjeta');
    series.forEach(function (serie) {
        var divElement = document.createElement("div");
        divElement.innerHTML = "<img class='card-img-top' scr=\"".concat(serie.image, "\" alt='Card image cap'>\n                                    <div class='card-body'>\n                                        <h5 class='card-title'>").concat(serie.name, "</h5>\n                                        <p class='card-text'>").concat(serie.description, "</p>\n                                        <a href=\"").concat(serie.review, "\">").concat(serie.review, "</a>\n                                    </div>");
        seriesCardDiv.appendChild(divElement);
    });
}
/**
 * Calcula el promedio de temporadas de las series en la tabla.
 * @param series
 * @returns
 */
function calculateAvgSeasonsNumber(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
