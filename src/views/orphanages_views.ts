import Orphanage from '../models/Orphanages';
import imagesView from './images_view'
export default {
    render(orphanage: Orphanage){
        return {
            id: orphanage.id,
            latitude: orphanage.latitude,
            name: orphanage.name,
            about: orphanage.about,
            longitude: orphanage.longitude,
            opening_hours: orphanage.opening_hours,
            instructions: orphanage.instructions,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images),
        };
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
};