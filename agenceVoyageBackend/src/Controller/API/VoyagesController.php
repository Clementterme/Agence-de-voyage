<?php

namespace App\Controller\API;

use App\Entity\Voyages;
use App\Repository\VoyagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class VoyagesController extends AbstractController {

    #[Route('/api/voyages', name: 'api_voyages')]
    public function index(VoyagesRepository $voyagesRepository): Response {
        $voyages = $voyagesRepository->findAll();
        
        return $this->json($voyages, context: ['groups' => 'api_voyages_index']);
    }

    #[Route('/api/voyages/{id}', name: 'api_voyages_show')]
    public function show(Voyages $voyages): Response {

        return $this->json($voyages, context: ['groups' => ['api_voyages_index']]);
    }
}