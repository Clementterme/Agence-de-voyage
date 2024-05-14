<?php

namespace App\Controller\API;

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
}