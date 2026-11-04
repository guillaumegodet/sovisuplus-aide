---
title: "Rôles et droits"
description: "Qui peut faire quoi dans SoVisu+."
sidebar:
  order: 7
---

## Ce que c'est

Sans rôle, un compte peut consulter. Tout droit de modification vient d'un **rôle**, attribué soit globalement, soit
sur un **périmètre** : une personne, une unité de recherche, un établissement.

C'est l'établissement qui décide. SoVisu+ propose un jeu de rôles, mais rien n'oblige à les attribuer tous : voir
[Instances et configuration](/donnees/instances-et-configuration/).

## Les rôles

| Rôle | Permet de |
|---|---|
| `document_editor` | Modifier les informations d'une publication : titres, résumés, contributeurs, type, mots-clés et, selon la configuration, date |
| `document_merger` | Fusionner des publications |
| `document_fetcher` | Relancer la collecte des publications d'une personne |
| `account_editor` | Modifier les identifiants d'une personne |
| `document_depositor` | Déposer dans HAL pour une personne |
| `structure_manager` | Masquer ou réafficher une structure ; rôle global uniquement |
| `admin` | Tout faire |

## Qui peut faire quoi

| Action | Sans rôle | Chercheur·se sur sa fiche | Référent·e à périmètre | Administrateur |
|---|---|---|---|---|
| Consulter tableau de bord, publications, structures | Oui | Oui | Oui | Oui |
| Corriger une publication | Non | Les siennes | Celles du périmètre | Toutes |
| Fusionner | Non | Les siennes | Celles du périmètre | Toutes |
| Mettre à jour les publications | Non | Sa fiche | Les personnes du périmètre | Toutes |
| Modifier des identifiants | Non | Selon la configuration | Selon la configuration | Voir [Identifiants](/donnees/identifiants/) |
| Déposer dans HAL | Non | Selon la configuration | Selon la configuration | Si le dépôt est configuré |
| Masquer une structure | Non | Non | Non | Oui |

La colonne « Référent·e » suppose les mêmes rôles que le chercheur, attribués sur une unité ou un établissement.

## Ce qui est « à vous »

Pour vos droits, une publication est la vôtre si vous figurez parmi ses **contributeurs**. Elle entre dans le
périmètre d'une unité si l'un de ses contributeurs appartient à cette unité.

## Limites connues

- **Aucun écran ne montre vos rôles** dans la version 1.6.4.
- **L'attribution se fait côté serveur**, par un administrateur technique de votre établissement.
- **Une publication en cours de mise à jour** reste non modifiable, quel que soit votre rôle.

## Comment demander un droit

Adressez-vous au [Support](/guides/support/) de votre établissement.
