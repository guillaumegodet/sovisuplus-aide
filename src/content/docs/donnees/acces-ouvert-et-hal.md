---
title: "Accès ouvert et HAL"
description: "Comment sont déterminés les statuts affichés."
sidebar:
  order: 5
---

## Statut Open Access

La colonne **Statut Open Access** de la liste affiche l'une de ces valeurs.

| Valeur | Signification habituelle |
|---|---|
| **GOLD** | Publiée en accès ouvert dans une revue entièrement en accès ouvert |
| **DIAMOND** | Comme GOLD, sans frais de publication pour l'auteur |
| **HYBRID** | En accès ouvert dans une revue par ailleurs sur abonnement |
| **BRONZE** | Lisible gratuitement chez l'éditeur, sans licence ouverte |
| **GREEN** | Une version est disponible dans une archive ouverte |
| **OTHER** | Autre situation |
| **CLOSED** | Pas de version ouverte connue |
| **UNKNOWN** | Aucune information |

### Comment la valeur est choisie

SoVisu+ dispose de deux informations : le statut donné par Unpaywall et celui issu des références bibliographiques.

1. Si le statut Unpaywall existe et n'est pas CLOSED, c'est lui qui s'affiche.
2. Sinon, SoVisu+ affiche l'autre statut, s'il existe.
3. Sinon, il affiche le statut Unpaywall, c'est-à-dire CLOSED, ou UNKNOWN s'il n'y en a aucun.

Le **tableau de bord** regroupe ces valeurs en **Accès Ouvert**, **Accès Fermé** et **Type d'accès inconnu**.

## Statut HAL

La colonne **Statut HAL** se lit par rapport à la perspective en cours.

| Situation | Affichage | Ce que cela veut dire |
|---|---|---|
| Une référence HAL existe et sa collection correspond à la perspective | **Dans HAL**, avec les collections | Tout va bien |
| Une référence HAL existe, hors de la collection attendue | **Dans HAL**, avec une alerte | Vérifiez l'affiliation déclarée dans HAL |
| Pas de référence HAL, IdHAL connu | **Hors HAL** : « Publication absente de votre HAL » | La publication n'est pas dans HAL, ou n'est pas reliée à votre IdHAL |
| Pas de référence HAL, IdHAL inconnu | **Hors HAL** : « Identifiant IdHAL manquant » | SoVisu+ ne peut pas se prononcer sans IdHAL |

Une structure sans identifiant HAL suit la même logique que la dernière ligne.

### L'onglet « Dépôt HAL incomplet »

La page **Publications** propose deux onglets : **Tous les documents** et **Dépôt HAL incomplet**. Le second liste les
publications **sans aucune référence HAL**, c'est-à-dire celles affichées **Hors HAL**. Une publication présente dans HAL
sous forme de simple notice, sans fichier, n'y figure donc pas : la colonne **Statut HAL** précise le type de dépôt
(**Notice**, **Fichier** ou **Annexe**).

## Limites connues

- **Les statuts décrivent ce que les sources déclarent**, pas une vérification du texte chez l'éditeur.
- **Beaucoup de publications peuvent rester sans statut** : UNKNOWN n'est pas synonyme de fermé.
- **« Hors HAL » ne prouve pas l'absence de HAL** : la publication peut y être, sans avoir encore été collectée ou
  reliée.
- **Mettre à jour dans HAL n'est pas disponible** : voir [Fonctions à venir](/donnees/fonctions-a-venir/). Le dépôt,
  lui, dépend de votre établissement : voir [Déposer dans HAL](/guides/hal/deposer-dans-hal/).

## Comment signaler une erreur

Une erreur de statut se corrige en général à la source : voir [Où corriger quoi](/guides/corriger/ou-corriger-quoi/).
