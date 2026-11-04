---
title: "Sources and harvesting"
description: "Where the data comes from and how it reaches SoVisu+."
sidebar:
  order: 1
---

## What it is

SoVisu+ is the last link in a chain. It displays and lets you curate data from your institution's directory and from
external bibliographic sources. **Harvesting** is the collection of these references.

## How it works

**People and structures:**

1. the institution provides the list of its people and structures, with their identifiers;
2. this list feeds a knowledge graph shared by the CRISalid tools;
3. SoVisu+ receives creations and updates from this graph.

**Publications:**

1. the harvester queries the sources using each person's identifiers;
2. it sends the references it finds to the graph, which reconciles them to build publications;
3. SoVisu+ receives and displays them.

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

A correction made in SoVisu+ is sent to the graph. In the meantime, the record shows:
"This document is being updated and cannot be edited right now."

## Known limits

- **Without an identifier, few results.** Sources are queried using identifiers: a person with no external identifier
  can hardly be harvested.
- **A wrong identifier adds publications** that do not belong to the person.
- **Delays vary**: they depend on the sources, on the activity of the chain and on how often the directory is updated. A
  recent publication may also not yet be known to the sources.
- **A directory correction does not always restart harvesting.** After an identifier change, a new collection may be
  needed.
- **SoVisu+ does not correct the sources.** An error in HAL or OpenAlex must be fixed there.

## How to report an error

See [Where to fix what](/en/guides/corriger/ou-corriger-quoi/) or [Support](/en/guides/support/).
