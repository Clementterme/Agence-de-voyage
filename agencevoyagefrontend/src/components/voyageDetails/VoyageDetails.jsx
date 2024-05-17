import "./voyageDetails.css";
import Image from "next/image";

export default function VoyageDetails(props) {
  return (
    <div className="voyage-card">
      <div className="img">
          <img src={props.image} />
        </div>
      <div className="voyage-card-information">
        <p className="voyage-card-name">{props.ville}</p>
        <p className="voyage-card-name">{props.pays}</p>
        <p className="voyage-card-species">Catégorie : {props.categorie}</p>
        <p className="voyage-card-species">
          Disponible du
          {" " +props.dateDebut} au {props.dateFin}
        </p>
        <p className="voyage-card-species">Prix : {props.prix} €</p>
      </div>
    </div>
  );
}
