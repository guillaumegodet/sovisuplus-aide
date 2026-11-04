---
title: "Roles and rights"
description: "Who can do what in SoVisu+."
sidebar:
  order: 7
---

## What it is

Without a role, an account can view. Any editing right comes from a **role**, given either globally or over a **scope**: a
person, a research unit, an institution.

The institution decides. SoVisu+ offers a set of roles, but nothing requires giving them all: see
[Instances and configuration](/en/donnees/instances-et-configuration/).

## The roles

| Role | Allows you to |
|---|---|
| `document_editor` | Edit a publication's information: titles, abstracts, contributors, type, keywords and, depending on the configuration, date |
| `document_merger` | Merge publications |
| `document_fetcher` | Restart the collection of a person's publications |
| `account_editor` | Edit a person's identifiers |
| `document_depositor` | Deposit in HAL for a person |
| `structure_manager` | Hide or show a structure; global role only |
| `admin` | Do everything |

## Who can do what

| Action | Without a role | Researcher on their own record | Contact with a scope | Administrator |
|---|---|---|---|---|
| View dashboard, publications, structures | Yes | Yes | Yes | Yes |
| Correct a publication | No | Their own | Those in the scope | All |
| Merge | No | Their own | Those in the scope | All |
| Update all publications | No | Their record | People in the scope | All |
| Edit identifiers | No | Depending on configuration | Depending on configuration | See [Identifiers](/en/donnees/identifiants/) |
| Deposit in HAL | No | Depending on configuration | Depending on configuration | If depositing is configured |
| Hide a structure | No | No | No | Yes |

The "Contact" column assumes the same roles as the researcher, given over a unit or an institution.

## What counts as "yours"

For your rights, a publication is yours if you are among its **contributors**. It falls within a unit's scope if one of its
contributors belongs to this unit.

## Known limits

- **No screen shows your roles** in version 1.6.4.
- **Roles are given on the server side**, by a technical administrator of your institution.
- **A publication being updated** remains locked, whatever your role.

## How to request a right

Contact your institution's [Support](/en/guides/support/).
