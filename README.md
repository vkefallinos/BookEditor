# BookEditor 
Book editor built on top of MegaDraft and draft.js (Work in Progress)

## Live Example & Documentation

Checkout the [website](http://globocom.github.io/megadraft/)!

## Developing

To run the development server and see the examples:

```
git clone https://github.com/vkefallinos/BookEditor.git
cd BookEditor/
make setup
make run
```

Then visit http://localhost:8080/website on your browser.

To run local tests:

```
make unit
```

To lint local source files:

```
make lint
```

To run tests and lint:

```
make test
```

## Dependencies

Megadraft depends on [Sass](http://sass-lang.com/) to build style assets.


## Importing the default styles

Megadraft ships with a default styling available at this location in the installed package: node_modules/megadraft/dist/css/megadraft.css.


## Plugins

Checkout the [docs][docs-plugins] for information about plugin structure.
To help in this process there is a [Yeoman Megadraft Plugin Generator][plugin-generator].


## License

Megadraft is licensed under the [MIT license](LICENSE).


## Third Party

The Megadraft website uses a picture from
[Stocksnap.io by Tim Marshall](https://stocksnap.io/photo/K148YZIFJ3) licensed
under [CC0 license](https://stocksnap.io/license).


[plugin-generator]: https://github.com/globocom/generator-megadraft-plugin
[docs-plugins]: http://globocom.github.io/megadraft/#/docs/plugins
[megadraft-slack]: https://draftjs.slack.com/messages/megadraft/
[draftjs-slack]: https://draftjs.herokuapp.com
