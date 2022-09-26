# Onboard Test

This is a repo made to give candidates an isolated impression of what they will be dealing with in their day to day job.

It includes tests (only one at the moment) to aid in picking who to hire.

## Setup

Prerequisites:
- https://nodejs.org/en/
  - Download the LTS and run through the installer with default settings.

All commands are run in CMD in the project folder.

- Run `npm install -force`
- Run `npm install gulp -g`
- Run `gulp build-dev`

<br>

## Debugging

After building your project run `gulp watch` for changes to automatically be detected.

This saves completely rebuilding the project.

<br>

You cannot click on the index.html file from the compiled folder to debug your work.

You have to serve the content from a server.

<br>

I recommend the `live server` extension available in Visual Store Code extensions.

- https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&ssr=false#overview

After installing the extension, right-click on the index.html file in the public folder and select "Open with Live Server".

<br>

## Documentation Index

- [**Knockout tips and trips**](./docs/knockout.md)
- [**Knockout components**](./docs/components.md)
- [**Test - Render Entity Data**](./src/scripts/test/test-entity-data/README.md)

<br>

## Common Problems / Notes

- "This is not a very good UI framework..."

Yes. As the majority of the UI is built using it for legacy reasons, I need to make sure you can learn to use it even though x,y,z other ones are far more "helpful".

- "When making changes my styles break."

This happens as a result of browser cache and sometimes because of a failed rebuild from the ongoing watch.
Try refresh without browser cache using "ctrl + shift + r" and if that fails then rebuild your project.

- "I cannot delete my public folder."

Live server can lock up files. Please turn it off by pressing the crossed out circle button on the bottom-right of your Visual Studio Code UI. Afterwards you should be able to delete the folder, this includes the rebuild deleting the folder.

- "My UI shows a blank page after I added my component or made a change."

As the UI relies on a "loader" file which loads all components before loading the page if any import fails it is likely the page will go blank and nothing will load.

I suggest reviewing your html and css imports at the top of your component files and checking to make sure you are importing libraries correctly.

- I am getting a Cesium related error on debug.

The latest CesiumJS version does not work with our library (yet).

Run `npm i cesium@1.93.0` then `gulp build-dev`.