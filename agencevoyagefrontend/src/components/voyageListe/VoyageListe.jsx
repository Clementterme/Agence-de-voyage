import "./voyageListe.css";
import Link from "next/link";
import VoyageTeaser from "../voyageTeaser/VoyageTeaser";

/**
 * Ce composant affiche une liste de cartes de personnages. Chaque carte est incluse
 * dans un lien hypertexte qui dirige vers une page de détails spécifique au personnage.
 * L'ID de chaque personnage est utilisé comme paramètre dans l'URL du lien, ce qui permet
 * de récupérer cet ID sur la page de destination pour effectuer une requête spécifique
 * afin de retrouver les détails du personnage concerné. Cela facilite la récupération et
 * l'affichage des informations précises du personnage sur sa page de détail.
 */
export default function VoyageListe(props) {
  return (
    <div>
      {props.voyages && (
        <ul className="voyages-list">
          {props.voyages.map((voyages, index) => (
            <Link key={index} href={"/voyages/" + voyages.id} className="carteVoyage">
              <li>
                <VoyageTeaser
                  pays={voyages.pays.nom}
                  dateDebut={voyages.dateDebut}
                  dateFin={voyages.dateFin}
                  categorie={voyages.categories[0].nom}
                  ville={voyages.ville}
                  image={voyages.image}
                />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
