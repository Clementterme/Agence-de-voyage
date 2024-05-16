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
    <main>
      <Navbar />
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
    </main>
  );
}
