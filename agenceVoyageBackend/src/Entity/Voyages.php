<?php

namespace App\Entity;

use App\Repository\VoyagesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: VoyagesRepository::class)]
class Voyages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups('api_voyages_index')]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups('api_voyages_index')]
    private ?\DateTimeInterface $dateFin = null;

    #[ORM\Column]
    #[Groups('api_voyages_index')]
    private ?int $prix = null;

    /**
     * @var Collection<int, Categorie>
     */
    #[ORM\ManyToMany(targetEntity: Categorie::class, inversedBy: 'voyages')]
    #[Groups('api_voyages_index')]
    private Collection $categories;

    #[ORM\ManyToOne(inversedBy: 'voyages')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('api_voyages_index')]
    private ?Pays $pays = null;

    // /**
    //  * @var Collection<int, Reservations>
    //  */
    // #[ORM\OneToMany(targetEntity: Reservations::class, mappedBy: 'voyage')]
    // private Collection $reservations;

    #[ORM\ManyToOne(inversedBy: 'voyages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $User = null;

    /**
     * @var Collection<int, Reservations>
     */
    #[ORM\OneToMany(targetEntity: Reservations::class, mappedBy: 'voyages')]
    private Collection $reservations;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        // $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(\DateTimeInterface $dateDebut): static
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): static
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): static
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * @return Collection<int, Categorie>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categorie $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): static
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function getPays(): ?Pays
    {
        return $this->pays;
    }

    public function setPays(?Pays $pays): static
    {
        $this->pays = $pays;

        return $this;
    }


    /**
    //  * @return Collection<int, Reservations>
     */
    // public function getReservations(): Collection
    // {
    //     return $this->reservations;
    // }

    // public function addReservation(Reservations $reservation): static
    // {
    //     if (!$this->reservations->contains($reservation)) {
    //         $this->reservations->add($reservation);
    //         $reservation->setVoyage($this);
    //     }

    //     return $this;
    // }

    // public function removeReservation(Reservations $reservation): static
    // {
    //     if ($this->reservations->removeElement($reservation)) {
    //         // set the owning side to null (unless already changed)
    //         if ($reservation->getVoyage() === $this) {
    //             $reservation->setVoyage(null);
    //         }
    //     }

    //     return $this;
    // }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): static
    {
        $this->User = $User;

        return $this;
    }

    /**
     * @return Collection<int, Reservations>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservations $reservation): static
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setVoyages($this);
        }

        return $this;
    }

    public function removeReservation(Reservations $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getVoyages() === $this) {
                $reservation->setVoyages(null);
            }
        }

        return $this;
    }
}
