# web_separated
This web package allows you to define row and column spacing consistently and simply.

> Simplifying the layout configuration processes.
> And the example doesn't work in the local environment.

## Useble

To define vertical spacing between children, declare the `column-separated` tag.
Conversely, to establish horizontal spacing, declare the `row-separated` tag.

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
