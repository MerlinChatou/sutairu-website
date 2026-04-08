# Extended Typography

The **Extended Typography** package adds complementary utilities to the core typography layer.
These utilities provide additional text-decoration, semantic styling, font-family, and text-transform helpers.

---

## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet:

```css
@import "@merlin-chatou/sutairu-extras/typography/style";
```

---

## Text Decoration Utilities

Extended decoration helpers provide additional utility aliases and hover variants.

| Style                  | Example                                          | HTML Tag | CSS Class             |
| ---------------------- | ------------------------------------------------ | -------- | --------------------- |
| **Strikethrough**      | <span class="td-line">Line through</span>        | `<s>`    | `.td-line`            |
| **Underline**          | <span class="td-underline">Underline</span>      | `<u>`    | `.td-underline`       |
| **No decoration**      | <span class="td-none">No decoration</span>       | —        | `.td-none`            |
| **Hover underline**    | <span class="hover:td-underline">Hover me</span> | —        | `.hover:td-underline` |
| **Hover line-through** | <span class="hover:td-line">Hover me</span>      | —        | `.hover:td-line`      |
| **Hover none**         | <span class="hover:td-none">Hover me</span>      | —        | `.hover:td-none`      |

All hover variants apply the decoration only on `:hover`.


## Semantic Change Indicators

Provides visual emphasis for inserted and deleted content.

| Style        | Example                 | HTML Tag | CSS Class |
| ------------ | ----------------------- | -------- | --------- |
| **Deleted**  | <del>Removed text</del> | `<del>`  | `.del`    |
| **Inserted** | <ins>Added text</ins>   | `<ins>`  | `.ins`    |

**Behavior:**

* `.del`, `del` → red text with underline
* `.ins`, `ins` → green text without underline

These utilities are designed for diffs, changelogs, and content comparison.


## Font Family Utilities

Additional font helpers beyond the core monospace utility.

| Style           | Example                                               | CSS Class         |
| --------------- | ----------------------------------------------------- | ----------------- |
| **Handwritten** | <span class="ff-handwritten">Handwritten style</span> | `.ff-handwritten` |


## Text Transform Utilities

Utility classes for controlling text casing.

| Style           | Example                                                 | CSS Class        |
| --------------- | ------------------------------------------------------- | ---------------- |
| **Uppercase**   | <span class="tt-upper">uppercase text</span>            | `.tt-upper`      |
| **Lowercase**   | <span class="tt-lower">LOWERCASE TEXT</span>            | `.tt-lower`      |
| **Capitalize**  | <span class="tt-capitalize">capitalize each word</span> | `.tt-capitalize` |
| **Normal case** | <span class="tt-normal">Normal Case</span>              | `.tt-normal`     |

