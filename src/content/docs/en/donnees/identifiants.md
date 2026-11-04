---
title: "Identifiers"
description: "What ORCID, IdHAL, IdRef and Scopus are for, and who can change them."
sidebar:
  order: 4
---

## What it is

An identifier distinguishes a person from their namesakes. The harvester uses it to find publications, so it directly
determines what SoVisu+ displays for you. Your IdHAL, ORCID and IdRef identifiers are visible in **See my account › My
account › My identifiers**. The Scopus identifier is used for collection, without being displayed.

| Identifier | Service | Can be authenticated |
|---|---|---|
| **ORCID** | ORCID international registry | Yes |
| **IdHAL** | HAL open archive | Yes |
| **IdRef** | Library reference system | No |
| **Scopus** | Scopus database | No |

The **eppn** and the **local** identifier are used to recognize your account, not to find your publications.

## How it works

Identifiers come first from your institution's directory. Depending on your rights, some can also be managed in SoVisu+.

An **authenticated** identifier is one whose ownership you have proved by logging in to the service.

| Action | On your own account | On another person's account |
|---|---|---|
| Authenticate (ORCID, IdHAL) | With the right to edit your identifiers | Never |
| Add without authenticating | With a wider right only | With a wider right |
| Remove a non-authenticated identifier | With the right to edit your identifiers | With a wider right |
| Remove an authenticated identifier | With the right to edit your identifiers | Never |
| Remove an IdRef | With a wider right only | With a wider right |

A **wider right** goes beyond your own record: global, or covering a unit or an institution. Without any right on
identifiers, the page is read-only: see [Roles and rights](/en/donnees/roles-et-droits/).

## "Missing identifiers" alert

If your institution has configured it, an alert appears on your publications: "Your publication lists may be incomplete".
It leads to **My Account**.

## Known limits

- **Adding an identifier is not always enough**: a new collection may be needed to find the publications, see
  [Sources and harvesting](/en/donnees/sources-et-moissonnage/).
- **The same identifier cannot belong to two people.** If the directory declares it for two records, the update of one of
  them fails, with no message visible to you.
- **ORCID and HAL are optional for an institution**: authentication only appears if it has been configured. See
  [Instances and configuration](/en/donnees/instances-et-configuration/).

## How to report an error

See [Check my identifiers](/en/guides/mon-profil/verifier-identifiants/) and
[Report a profile error](/en/guides/mon-profil/signaler-une-erreur-de-profil/).
