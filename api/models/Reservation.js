class Reservation {
    constructor(produit, dateDebut, dateFin) {
        this.produit = produit;
        this.dateDebut = new Date(dateDebut);
        this.dateFin = new Date(dateFin);
    }
    getNombreJours() {
        const diffMs = this.dateFin - this.dateDebut;
        const jours = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        return jours > 0 ? jours : 1;
    }
    calculerPrixTotal() {
        return this.getNombreJours() * parseFloat(this.produit.prix);
    }
    datesValides() {
        return this.dateDebut < this.dateFin;
    }
    estDisponible(reservationsExistantes) {
        return !reservationsExistantes.some(r => {
            const debutExistant = new Date(r.date_debut);
            const finExistant = new Date(r.date_fin);
            return this.dateDebut < finExistant && this.dateFin > debutExistant;
        });
    }
}
module.exports = Reservation;