![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/web-accordion)

> `web-accordion` is a lightweight, dependency-free, styleable accordion web component.

# Installation

## Script tag

```html
<script src='https://unpkg.com/web-accordion/dist/web-accordion.js'></script>
```

## Node Module

 - Install via npm: `npm install web-accordion --save`
 - Add script to html: `<script src='node_modules/web-accordion/dist/web-accordion.js'></script>`

## Framework integration

For integration with different frameworks the [stencil docs](https://stenciljs.com/docs/overview) should be consulted.

# Using this component

Add the `web-accordion` component as the accordion parent to your html. For each accordion entry add a `web-accrdion-item`. Add a `slot="title"` for the respective accordion item header:
```html
<web-accordion>
  <web-accordion-item>
    <h1 slot="title">item no 1</h1>
    <div>content of item no 1</div>
  </web-accordion-item>
  <web-accordion-item>
    <h1 slot="title">item no 2</h1>
    <div>content of item no 2</div>
  </web-accordion-item>
</web-complete>
```

A full example with some styling can be found [here](https://github.com/stefanhuber/web-accordion/blob/master/docs/index.html).

# web-accordion API

## Methods

### `close(index: number) => Promise<void>`

close an accordion item

#### Returns

Type: `Promise<void>`



### `open(index: number) => Promise<void>`

Open an accordion item

#### Returns

Type: `Promise<void>`

# web-accordion-item API

## Properties

| Property                 | Attribute | Description                                                                      | Type                                        | Default                              |
| ------------------------ | --------- | -------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------ |
| `index`                  | `index`   | index of accordion item from top to bottom                                       | `number`                                    | `-1`                                 |
| `mutationObserverConfig` | --        | The mutation observer config to listen for content changes in the accordion item | `{ childList: boolean; subtree: boolean; }` | `{ childList: true, subtree: true }` |
| `open`                   | `open`    | accordion item is open or opening (css transition)                               | `boolean`                                   | `false`                              |


## Events

| Event            | Description                                              | Type               |
| ---------------- | -------------------------------------------------------- | ------------------ |
| `contentChanged` | triggered when the content of the accordion item changes | `CustomEvent<any>` |
| `openEvent`      | triggered when the accordion item is opened              | `CustomEvent<any>` |


## Methods

### `closeItem() => Promise<void>`

close the accordion item

#### Returns

Type: `Promise<void>`



### `openItem() => Promise<void>`

open the accordion item

#### Returns

Type: `Promise<void>`


# Developer 

```
npm i            install dependencies
npm start        start local development 
npm run build    build component for production
npm test         run e2e tests
```