---
title: "Sources and harvesting"
description: "Where the data comes from and how it reaches SoVisu+."
sidebar:
  order: 1
---

## What it is

SoVisu+ displays and lets you curate data from your institution's directory and from
external bibliographic sources. **Harvesting** is the collection of these references.

## How it works

**People and structures:**

1. the institution provides the list of its people and structures, with their identifiers;
2. SoVisu+ receives creations and updates based on this list.

**Publications:**

1. the sources are queried using each person's identifiers;
2. the references found are matched, to group those describing the same publication;
3. SoVisu+ receives the resulting publications and displays them.

| Source | Nature |
|---|---|
| **HAL** | French open archive |
| **ScanR** | Research and innovation search engine |
| **IdRef** | Reference system of French academic libraries |
| **OpenAlex** | International open catalog |
| **Scopus** | Commercial bibliographic database |

## Restarting a collection

On a person's perspective, the **Update all publications** button opens the **Sources to be syncronized** window. All
sources are checked by default. The report shows, for each source, the references **Created**, **Modified**, **Deleted**
and **Unchanged**.

When the result arrives, a message says the list has changed. Click **Update view**. See
[Update all publications](/en/guides/publications/mettre-a-jour-les-publications/).

## Your corrections

A correction made in SoVisu+ is not immediate. While it is processed, the record shows:
"This document is being updated and cannot be edited right now."

## Known limits

- **Without an identifier, few results.** Sources are queried using identifiers: for a person with no external
  identifier, almost no publications can be found.
- **A wrong identifier adds publications** that do not belong to the person.
- **Delays vary**: they depend on the sources, on the amount of data being processed and on how often the directory is updated. A
  recent publication may also not yet be known to the sources.
- **A directory correction does not always restart harvesting.** After an identifier change, a new collection may be
  needed.
- **SoVisu+ does not correct the sources.** An error in HAL or OpenAlex must be fixed there.

## How to report an error

See [Where to fix what](/en/guides/corriger/ou-corriger-quoi/) or [Support](/en/guides/support/).
