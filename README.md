# web_separated
Using this web package, you can define row and column spacing in HTML consistently and simply.

> The example doesn't work in the local environment.

## Usage

To define vertical spacing between children, declare the `<column-separated>` tag.
Conversely, to establish horizontal spacing, declare the `<row-separated>` tag.

> When setting the spacing, define the value in the property of `spacing`.

### Vertical
```html
<!-- Set the spacing between column-items to 15px. -->
<column-separated spacing="15px"></column-separated>
```

### Horizontal
```html
<!-- Set the spacing between column-items to 15px. -->
<row-separated spacing="15px"></row-separated>
```

### Example
This setup creates a structured layout with defined spaces that make your content more readable and aesthetically pleasing.

```html
<!-- Set the spacing between column-items to 15px. -->
<column-separated spacing="15px">

    <!-- Set the spacing between column-items to 5px. -->
    <column-separated spacing="5px">
        <h1>Title</h1>
        <p>description</p>
    </column-separated>

    <!-- Set the spacing between row-items to 5px. -->
    <row-separated spacing="5px">
        <button>button 1</button>
        <button>button 2</button>
    </row-separated>

</column-separated>
```
