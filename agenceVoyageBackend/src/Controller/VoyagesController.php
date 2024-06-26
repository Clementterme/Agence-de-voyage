<?php

namespace App\Controller;

use App\Entity\Voyages;
use App\Form\VoyagesType;
use App\Repository\VoyagesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER', statusCode: 423, message: "Vous n'avez pas les droits pour accéder à cette page")]
#[Route('/voyages')]
class VoyagesController extends AbstractController
{
    #[Route('/', name: 'app_voyages_index', methods: ['GET'])]
    public function index(VoyagesRepository $voyagesRepository): Response
    {
        return $this->render('voyages/index.html.twig', [
            'voyages' => $voyagesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_voyages_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $voyage = new Voyages();
        $form = $this->createForm(VoyagesType::class, $voyage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($voyage);
            $entityManager->flush();

            return $this->redirectToRoute('app_voyages_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('voyages/new.html.twig', [
            'voyage' => $voyage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_voyages_show', methods: ['GET'])]
    public function show(Voyages $voyage): Response
    {
        return $this->render('voyages/show.html.twig', [
            'voyage' => $voyage,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_voyages_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voyages $voyage, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(VoyagesType::class, $voyage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_voyages_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('voyages/edit.html.twig', [
            'voyage' => $voyage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_voyages_delete', methods: ['POST'])]
    public function delete(Request $request, Voyages $voyage, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$voyage->getId(), $request->getPayload()->get('_token'))) {
            $entityManager->remove($voyage);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_voyages_index', [], Response::HTTP_SEE_OTHER);
    }
}
