<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240503095917 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservations ADD voyages_id INT NOT NULL');
        $this->addSql('ALTER TABLE reservations ADD CONSTRAINT FK_4DA239A170CAB9 FOREIGN KEY (voyages_id) REFERENCES voyages (id)');
        $this->addSql('CREATE INDEX IDX_4DA239A170CAB9 ON reservations (voyages_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservations DROP FOREIGN KEY FK_4DA239A170CAB9');
        $this->addSql('DROP INDEX IDX_4DA239A170CAB9 ON reservations');
        $this->addSql('ALTER TABLE reservations DROP voyages_id');
    }
}
