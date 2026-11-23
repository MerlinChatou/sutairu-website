# Word Break

Utilities for controlling word breaks and line wrapping behavior.

| Class          | CSS Property                 | Description                                                               |
| -------------- | ---------------------------- | ------------------------------------------------------------------------- |
| `wb-normal` | `word-break: normal;`        | Default line break behavior at standard word boundaries.                  |
| `wb-all`    | `word-break: break-all;`     | Breaks text at any character to prevent overflow.                         |
| `wb-keep`   | `word-break: keep-all;`      | Prevents word breaks within CJK (Chinese, Japanese, Korean) text.         |
| `wb-word`   | `overflow-wrap: break-word;` | Wraps long, unbroken strings onto a new line to avoid container overflow. |

## Usage

<div class="card max-w-xs p-3 d-flex fd-col gap-3">
  
  <!-- 1. Break Normal -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">wb-normal</code>
    <p class="wb-normal fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

  <!-- 2. Break All -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">wb-all</code>
    <p class="wb-all fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

  <!-- 3. Break Keep -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">wb-keep</code>
    <p class="wb-keep fs-sm mt-1">
      CJK テキストの改行を防ぎます長い文字列の挙動確認用テストデータ
    </p>
  </div>

  <!-- 4. Break Word -->
  <div class="border p-2 r-2">
    <code class="fs-xs fw-bold">wb-word</code>
    <p class="wb-word fs-sm mt-1">
      https://example.com/very-long-unbroken-string-that-will-overflow
    </p>
  </div>

</div>

```html
<p class="wb-normal fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
<p class="wb-all fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
<p class="wb-keep fs-sm mt-1">CJK テキストの改行を防ぎます長い文字列の挙動確認用テストデータ</p>
<p class="wb-word fs-sm mt-1">https://example.com/very-long-unbroken-string-that-will-overflow</p>
```
