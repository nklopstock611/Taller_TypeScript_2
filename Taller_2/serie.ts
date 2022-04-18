
/* Crear la clase Serie */

export class Serie {

    // Atributos

    id: number
    name: string
    channel: string
    seasons: number
    description: string
    review: string
    image: string

    // Constructor

    constructor(seriesId: number, seriesName: string, seriesChannel: string, seriesSeasons: number, seriesDescription: string, seriesReview: string, seriesImage: string) {
        this.id = seriesId
        this.name = seriesName
        this.channel = seriesChannel
        this.seasons = seriesSeasons
        this.description = seriesDescription
        this.review = seriesReview
        this.image = seriesImage
    }
}
