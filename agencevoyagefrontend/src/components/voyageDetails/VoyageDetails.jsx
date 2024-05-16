import "./voyageDetails.css";
import Image from "next/image";

export default function VoyageDetails(props) {
  return (
    <div className="voyage-card">
      {props.image && (
        <Image
          className="voyage-card-image"
          width={250}
          height={250}
          src={props.image}
          alt={"Image de " + props.pays}
        />
      )}
      <div className="voyage-card-information">
        <p className="voyage-card-name">{props.pays}</p>
        <p className="voyage-card-species">
          {props.dateDebut} - {props.dateFin}
        </p>
      </div>
    </div>
  );
}
