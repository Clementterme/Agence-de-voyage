"use client";

import "./page.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import VoyageDetails from "@/components/voyageDetails/VoyageDetails";

export default function VoyageSelectionneDetails(props) {
  // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
  const [loading, setLoading] = useState(true); // État de chargement des données.
  const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
  const [data, setData] = useState(null); // Stockage des données reçues du fetch.

  useEffect(() => {
    // Déclenchement de la récupération des données de personnages au montage du composant.
    try {
      fetch("http://127.0.0.1:8000/api/voyages/" + props.params.voyageId)
        .then((response) => response.json()) // Transformation de la réponse en JSON.
        .then((data) => {
          setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
          setData(data); // Enregistrement des données reçues dans l'état 'data'.
          console.log(data);
        });
    } catch (error) {
      setError(true); // Enregistrement de l'erreur dans l'état 'error'.
      setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
    }
  }, []); // Le tableau vide indique que cet effet ne s'exécute qu'au montage.

  return (
    <>
      <Navbar />
      <main>
        {/* Affichage conditionnel en fonction de l'état du chargement et des erreurs */}
        {loading && !error && <div>Chargement en cours ...</div>}
        {!loading && !error && data && (
          <VoyageDetails
            pays={data.pays.nom}
            dateDebut={data.dateDebut}
            dateFin={data.dateFin}
            categorie={data.categories[0].nom}
            prix={data.prix}
            ville={data.ville}
            image={data.image}
          />
        )}
        {!loading && error && <div>Une erreur est survenue</div>}
        <h1 className="mx-5 mt-5">Demande de réservation</h1>
        <form className="m-5">
          <div class="mb-3">
            <label for="inputNom" class="form-label">
              Nom
            </label>
            <input
              type="text"
              class="form-control"
              id="inputNom"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="inputPrenom" class="form-label">
              Prénom
            </label>
            <input type="text" class="form-control" id="inputPrenom" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="inputDate" class="form-label">
              Date de départ
            </label>
            <input
              type="date"
              class="form-control"
              id="inputDate"
              name="date"
              required
            />
          </div>
          <div class="mb-3">
            <label for="inputDate" class="form-label">
              Date de retour
            </label>
            <input
              type="date"
              class="form-control"
              id="inputDate"
              name="date"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Envoyer
          </button>
        </form>
      </main>
    </>
  );
}
