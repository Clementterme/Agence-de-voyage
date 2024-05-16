"use client";

import Navbar from "@/components/navbar/Navbar";
import VoyageListe from "@/components/voyageListe/VoyageListe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Voyages() {
  const [loading, setLoading] = useState(true); // État de chargement des données.
  const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
  const [data, setData] = useState(null); // Stockage des données reçues du fetch.

  useEffect(() => {
    // Déclenchement de la récupération des données de personnages au montage du composant.
    try {
      // fetch("https://rickandmortyapi.com/api/character")
      fetch("http://127.0.0.1:8000/api/voyages")
        .then((response) => response.json()) // Transformation de la réponse en JSON.
        .then((data) => {
          setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
          setData(data); // Enregistrement des données reçues dans l'état 'data'.
          // console.log(data);
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
      {/* {!loading && !error && data && <CharacterList characters={data} />} */}
      {!loading && !error && data && <VoyageListe voyages={data} />}
      {/* {!loading && !error && data && console.log(data)} */}
      {!loading && error && <div>Une erreur est survenue</div>}
    </main>
  );
}
