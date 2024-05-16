import "./voyageTeaser.css";
import Image from "next/image";

export default function VoyageTeaser(props) {
  return (
    <div className="voyage-card">
      <div className="voyage-card-information">
        <p className="voyage-card-name">{props.pays}</p>
        <p className="voyage-card-name">{props.categorie}</p>
        <p className="voyage-card-species">{props.dateDebut}</p>
        <p className="voyage-card-species">{props.dateFin}</p>
      </div>
      {props.image && (
        <Image
          className="character-card-image"
          width={250}
          height={250}
          src={props.image}
          alt={"Image de " + props.name}
        />
      )}
    </div>
  );
}
