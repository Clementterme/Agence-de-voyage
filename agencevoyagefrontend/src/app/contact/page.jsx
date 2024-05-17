"use client";

import Navbar from "@/components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="mx-5 mt-3">Contact</h1>
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
            <label for="inputObjet" class="form-label">
              Objet
            </label>
            <input type="text" class="form-control" id="inputObjet" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Envoyer
          </button>
        </form>
      </main>
    </>
  );
}
