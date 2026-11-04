---
title: "Publications, sources et fusion"
description: "Comment une publication est construite à partir de plusieurs notices."
sidebar:
  order: 2
---

## Ce que c'est

Une même publication est souvent décrite par plusieurs sources. SoVisu+ distingue donc :

- la **référence source** : la description fournie par une source, par exemple HAL ou OpenAlex ;
- la **publication** : la fiche unique, qui regroupe une ou plusieurs références sources.

La colonne **Sources** de la liste et l'onglet **Sources** de la fiche montrent ces références, dans le tableau
**Références bibliographiques sources**.

## Comment ça fonctionne

Le rapprochement est automatique, mais imparfait : il peut laisser deux fiches pour un même travail, ou regrouper à
tort deux travaux différents.

| Situation | Que faire |
|---|---|
| Deux fiches décrivent le même travail | **Fusionner les documents sélectionnés**, dans la liste **Publications**. Cette action demande un rôle : voir [Rôles et droits](/donnees/roles-et-droits/) |
| Une fiche contient une référence d'un autre travail | Pas encore de solution dans l'interface : **Dissocier** ne fait rien pour l'instant. Passez par le [Support](/guides/support/) |

## Quand une fiche est bloquée

Une publication en cours de mise à jour ne peut ni être modifiée, ni être sélectionnée pour une fusion. Attendez la fin du traitement, puis cliquez sur **Mettre à jour l'affichage** si le message
apparaît.

## Limites connues

- Vous ne pouvez fusionner que des publications situées dans vos droits : un chercheur sur sa fiche ne peut fusionner
  que des publications dont il est contributeur.
- Fusionner dans SoVisu+ ne change rien dans la source d'origine : un doublon présent dans HAL y reste.
- Les actions **Dissocier** et **Invalider** de l'onglet **Sources** ne sont pas encore disponibles : voir
  [Fonctions à venir](/donnees/fonctions-a-venir/).

## Comment signaler une erreur

Voir [Fusionner des doublons](/guides/publications/fusionner-des-doublons/) ou le [Support](/guides/support/).
