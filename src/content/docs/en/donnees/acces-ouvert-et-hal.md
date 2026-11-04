---
title: "Open access and HAL"
description: "How the displayed statuses are determined."
sidebar:
  order: 5
---

## Open Access Status

The **Open Access Status** column of the list shows one of these values.

| Value | Usual meaning |
|---|---|
| **GOLD** | Published open access in a fully open access journal |
| **DIAMOND** | Like GOLD, with no publication fee for the author |
| **HYBRID** | Open access in an otherwise subscription journal |
| **BRONZE** | Free to read at the publisher, with no open license |
| **GREEN** | A version is available in an open archive |
| **OTHER** | Other situation |
| **CLOSED** | No known open version |
| **UNKNOWN** | No information |

### How the value is chosen

SoVisu+ has two pieces of information: the status given by Unpaywall and the one from the bibliographic references.

1. If the Unpaywall status exists and is not CLOSED, it is displayed.
2. Otherwise, SoVisu+ displays the other status, if there is one.
3. Otherwise, it displays the Unpaywall status, that is CLOSED, or UNKNOWN if there is none.

The **dashboard** groups these values into **Open Access**, **Closed Access** and **Unknown access**.

## Status in HAL

The **Status in HAL** column reads relative to the current perspective.

| Situation | Display | What it means |
|---|---|---|
| A HAL reference exists and its collection matches the perspective | **In HAL**, with the collections | All is well |
| A HAL reference exists, outside the expected collection | **In HAL**, with an alert | Check the affiliation declared in HAL |
| No HAL reference, IdHAL known | **Out of HAL**: "Publication unavailable in HAL" | The publication is not in HAL, or is not linked to your IdHAL |
| No HAL reference, IdHAL unknown | **Out of HAL**: "IdHAL is missing" | SoVisu+ cannot tell without an IdHAL |

A structure without a HAL identifier follows the same logic as the last row.

### The "HAL incomplete filling" tab

The **Publications** page has two tabs: **All my documents** and **HAL incomplete filling**. The second lists publications
with **no HAL reference at all**, that is those shown as **Out of HAL**. A publication present in HAL as a simple notice,
with no file, is therefore not listed: the **Status in HAL** column specifies the deposit type (**Notice**, **File** or
**Annex**).

## Known limits

- **Statuses describe what the sources declare**, not a check of the text at the publisher.
- **Many publications may remain without a status**: UNKNOWN does not mean closed.
- **"Out of HAL" does not prove absence from HAL**: the publication may be there, not yet collected or linked.
- **Update in HAL is not available**: see [Upcoming features](/en/donnees/fonctions-a-venir/). Depositing depends on your
  institution: see [Deposit in HAL](/en/guides/hal/deposer-dans-hal/).

## How to report an error

A status error is generally fixed at the source: see [Where to fix what](/en/guides/corriger/ou-corriger-quoi/).
