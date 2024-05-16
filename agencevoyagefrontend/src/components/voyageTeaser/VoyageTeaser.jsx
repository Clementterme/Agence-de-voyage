import "./voyageTeaser.css";
import Image from "next/image";

export default function VoyageTeaser(props) {
  return (
    <div className="voyage-card">
      <div className="voyage-card-information">
        <p className="voyage-card-name">{props.ville}</p>
        <p className="voyage-card-name">{props.pays}</p>
        <div className="img">
          <img src={props.image} />
        </div>
        <p className="voyage-card-species">{props.categorie}</p>
        <p className="voyage-card-species">{props.dateDebut}</p>
        <p className="voyage-card-species">{props.dateFin}</p>
      </div>
    </div>
  );
}
