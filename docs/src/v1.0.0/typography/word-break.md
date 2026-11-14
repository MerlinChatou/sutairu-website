# Word Break

Utilities for controlling word breaks and line wrapping behavior.

| Class          | CSS Property                 | Description                                                               |
| -------------- | ---------------------------- | ------------------------------------------------------------------------- |
| `break-normal` | `word-break: normal;`        | Default line break behavior at standard word boundaries.                  |
| `break-all`    | `word-break: break-all;`     | Breaks text at any character to prevent overflow.                         |
| `break-keep`   | `word-break: keep-all;`      | Prevents word breaks within CJK (Chinese, Japanese, Korean) text.         |
| `break-word`   | `overflow-wrap: break-word;` | Wraps long, unbroken strings onto a new line to avoid container overflow. |

## Usage

<div class="card max-w-xs p-3 d-flex fd-col gap-3">
  
  <!-- 1. Break Normal -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">break-normal</code>
    <p class="break-normal fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

  <!-- 2. Break All -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">break-all</code>
    <p class="break-all fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

  <!-- 3. Break Keep -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">break-keep</code>
    <p class="break-keep fs-sm mt-1">
      CJK テキストの改行を防ぎます長い文字列の挙動確認用テストデータ
    </p>
  </div>

  <!-- 4. Break Word -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">break-word</code>
    <p class="break-word fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

</div>

```html
<p class="break-normal fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
<p class="break-all fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
<p class="break-keep fs-sm mt-1">CJK テキストの改行を防ぎます長い文字列の挙動確認用テストデータ</p>
<p class="break-word fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
```
