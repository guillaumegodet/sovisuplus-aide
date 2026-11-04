---
title: "Sources et moissonnage"
description: "D'où viennent les données et comment elles arrivent dans SoVisu+."
sidebar:
  order: 1
---

## Ce que c'est

SoVisu+ est le dernier maillon d'une chaîne. Il affiche et permet de qualifier des données qui proviennent de
l'annuaire de votre établissement et de sources bibliographiques externes. Le **moissonnage** est la collecte de
ces références.

## Comment ça fonctionne

**Les personnes et les structures :**

1. l'établissement fournit la liste de ses personnes et de ses structures, avec leurs identifiants ;
2. cette liste alimente un graphe de connaissances commun aux outils CRISalid ;
3. SoVisu+ reçoit les créations et les mises à jour depuis ce graphe.

**Les publications :**

1. le moissonneur interroge les sources à partir des identifiants de chaque personne ;
2. il transmet les références trouvées au graphe, qui les rapproche pour construire des publications ;
3. SoVisu+ les reçoit et les affiche.

| Source | Nature |
|---|---|
| **HAL** | Archive ouverte française |
| **ScanR** | Moteur de la recherche et de l'innovation |
| **IdRef** | Référentiel des bibliothèques de l'enseignement supérieur |
| **OpenAlex** | Catalogue ouvert international |
| **Scopus** | Base bibliographique commerciale |

## Relancer une collecte

Sur une perspective personne, le bouton **Mettre à jour les publications** ouvre la fenêtre **Sources à synchroniser**.
Toutes les sources y sont cochées par défaut. Le bilan indique pour chacune les références **Créées**, **Modifiées**,
**Supprimées** et **Inchangées**.

Quand le résultat arrive, un message signale que la liste a changé. Cliquez sur **Mettre à jour l'affichage**. Voir
[Mettre à jour les publications](/guides/publications/mettre-a-jour-les-publications/).

## Vos corrections

Une correction faite dans SoVisu+ est transmise au graphe. Pendant ce temps, la fiche affiche :
« Ce document est en cours de mise à jour et ne peut pas être modifié pour le moment. »

## Limites connues

- **Sans identifiant, peu de résultats.** Les sources sont interrogées à partir des identifiants : une personne sans
  identifiant externe n'est pratiquement pas moissonnable.
- **Un identifiant faux ajoute des publications** qui ne sont pas celles de la personne.
- **Les délais varient** : ils dépendent des sources, de l'activité de la chaîne et de la fréquence de mise à jour de
  l'annuaire. Une publication récente peut aussi ne pas être encore connue des sources.
- **Une correction d'annuaire ne relance pas toujours le moissonnage.** Après un changement d'identifiant, une nouvelle
  collecte peut être nécessaire.
- **SoVisu+ ne corrige pas les sources.** Une erreur dans HAL ou OpenAlex se corrige chez eux.

## Comment signaler une erreur

Voir [Où corriger quoi](/guides/corriger/ou-corriger-quoi/) ou le [Support](/guides/support/).
