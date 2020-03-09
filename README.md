# sohelansari.com-v2

This my online resume.

The published site can be seen on https://sohelansari.com

## Run locally

To launch the website locally, clone the repo. Then,
```
npm i
npm run build
npm start
```
You should be able to see the page on http://127.0.0.1:8080

## Run in dev mode

To watch the files and build as you make changes, run
```
npm run dev
```
Just refresh the page after saving your files and your changes will reflect

## How to publish

This site is served through github pages.
To publish any changes, first commit and push your code to master.
Run
```
npm run build
cd dist
```
When you run `git status` you should now be on `gh-pages` branch.
Commit your changes and push to `gh-pages` branch.
```
git add .
git commit -m "Your commit message"
git push origin gh-pages
```
You changes should now be published.
