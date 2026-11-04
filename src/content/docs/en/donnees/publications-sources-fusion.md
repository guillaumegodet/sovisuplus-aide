---
title: "Publications, sources and merging"
description: "How a publication is built from several source records."
sidebar:
  order: 2
---

## What it is

The same publication is often described by several sources. SoVisu+ therefore distinguishes:

- the **source reference**: the description provided by a source, for example HAL or OpenAlex;
- the **publication**: the single record, which groups one or more source references.

The **Sources** column of the list and the **Sources** tab of the record show these references.

## How it works

Reconciliation is automatic but imperfect: it may leave two records for the same work, or wrongly group two different
works.

| Situation | What to do |
|---|---|
| Two records describe the same work | **Merge selected documents**, in the **Publications** list. This action requires a role: see [Roles and rights](/en/donnees/roles-et-droits/) |
| A record contains a reference to another work | No solution in the interface yet: **Dissociate** does nothing for now. Go through [Support](/en/guides/support/) |

## When a record is locked

A publication being updated cannot be edited or selected for a merge. Wait for processing to finish, then click **Update
view** if the message appears.

## Known limits

- You can only merge publications within your rights: a researcher on their own record can only merge publications they
  contributed to.
- Merging in SoVisu+ changes nothing in the original source: a duplicate in HAL remains there.
- The **Dissociate** and **Invalidate** actions of the **Sources** tab are not available yet: see
  [Upcoming features](/en/donnees/fonctions-a-venir/).

## How to report an error

See [Merge duplicates](/en/guides/publications/fusionner-des-doublons/) or [Support](/en/guides/support/).
