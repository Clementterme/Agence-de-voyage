import "./voyageDetails.css";
import Image from "next/image";

export default function VoyageDetails(props) {
  return (
    <div className="voyage-card">
      {/* <img src="https://res.cloudinary.com/lastminute-contenthub/image/upload/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1559865459/DAM/Photos/Destinations/Americas/Caribbean/shutterstock_170603807.jpg"></img> */}
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
        <p className="voyage-card-species">{props.categorie}</p>
        <p className="voyage-card-species">
          Disponible du
          {" " +props.dateDebut} au {props.dateFin}
        </p>
        <p className="voyage-card-species">Prix : {props.prix} €</p>
      </div>
    </div>
  );
}
