# web_separated
This web package allows you to define row and column spacing consistently and simply.

> Simplifying the layout configuration processes.
> And the example doesn't work in the local environment.

## Useble

The following describes how to define the contents of the json files within the localizations folder, <br />
And this example json file is `korean.json` provided by default.

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
