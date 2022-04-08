import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesCardDiv: HTMLElement = document.getElementById('card-series')!;
const avgSeasonNumber: HTMLElement = document.getElementById('avg-seasons')!;

renderCoursesInTable(dataSeries);

avgSeasonNumber.innerHTML = `${calculateAvgSeasonsNumber(dataSeries)}`;

renderSerieCard(dataSeries);

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><a href="${serie.review}">${serie.name}</a></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function renderSerieCard(series: Serie[]): void {
    console.log('Desplegando tarjeta');
    series.forEach((serie) => {
        let divElement = document.createElement("div");
            divElement.innerHTML = `<img class='card-img-top' scr="${serie.image}" alt='Card image cap'>
                                    <div class='card-body'>
                                        <h5 class='card-title'>${serie.name}</h5>
                                        <p class='card-text'>${serie.description}</p>
                                        <a href="${serie.review}">${serie.review}</a>
                                    </div>`;
        seriesCardDiv.appendChild(divElement);
    });
}

/**
 * Calcula el promedio de temporadas de las series en la tabla.
 * @param series
 * @returns 
 */
function calculateAvgSeasonsNumber(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}