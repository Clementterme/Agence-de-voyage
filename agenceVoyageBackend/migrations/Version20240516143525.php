<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240516143525 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact CHANGE statut_id statut_id INT NOT NULL');
        $this->addSql('ALTER TABLE reservations CHANGE statut_id statut_id INT NOT NULL');
        $this->addSql('ALTER TABLE voyages ADD ville VARCHAR(50) NOT NULL, ADD image VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact CHANGE statut_id statut_id INT DEFAULT 1 NOT NULL');
        $this->addSql('ALTER TABLE voyages DROP ville, DROP image');
        $this->addSql('ALTER TABLE reservations CHANGE statut_id statut_id INT DEFAULT 1 NOT NULL');
    }
}
