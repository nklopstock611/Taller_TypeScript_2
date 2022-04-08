/* Crear la clase Serie */
var Serie = /** @class */ (function () {
    // Constructor
    function Serie(seriesId, seriesName, seriesChannel, seriesSeasons, seriesDescription, seriesReview, seriesImage) {
        this.id = seriesId;
        this.name = seriesName;
        this.channel = seriesChannel;
        this.seasons = seriesSeasons;
        this.description = seriesDescription;
        this.review = seriesReview;
        this.image = seriesImage;
    }
    return Serie;
}());
export { Serie };
