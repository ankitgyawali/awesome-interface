# Awesome Interface [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[Awesome Interface](https://ankitgyawali.github.io/awesome-interface) parses all of the awesome lists using python and dumps the data into a JSON object. The JSON data is then displayed in a single page application using AngularJS. The motivation behind this was to have quick access to all of the awesome resources in an easy manner. There is room for improvement with the list parser and room for expansion of the project which is described [here](https://ankitgyawali.github.io/awesome-interface/#/about).

## How it works:
init.py and parse.py from the repository can be used to parse the child awesome lists that are listed  in the [parent awesome list.](https://github.com/sindresorhus/awesome)
The data is pushed to repository to every two weeks to so that awesome-interface can catch up and render the changes in awesome lists.

## How to use:
The application runs [here](https://ankitgyawali.github.io/awesome-interface). Running 
```python init.py``` on the project folder will generate [awesomewithdetails.json](https://github.com/ankitgyawali/awesome-interface/blob/master/awesomewithdetails.json).

## Issues
Report all issues related to awesome-interface on this separate <a href="https://github.com/ankitgyawali/awesome-interface/issues" target="_blank">issue page</a>.

## Contribution
Suggestions and contributions are appreciated. Credits to [sindresorhus](https://github.com/sindresorhus/awesome), all the contributors of the awesome lists for creating such an awesome resource and [GoBijan](https://github.com/GoBijan/maverix) for creating the angular theme used for this project.

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
