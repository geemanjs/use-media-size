## useMediaSize hook

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
<!-- prettier-ignore-end -->

### Installation
```
npm install --save use-media-size
yarn add use-media-size
```

### When shouldn't I use this library?
By its nature this library is controversial, I dislike the idea of mixing media queries within javascript.
In some use cases however, it is beneficial to hide a tree of components depending on media size. 

In the first instance you should stick with css + media queries.
If you are doing something "expensive" for medium / large screens and want a drastically different component tree for smaller screens this library should be considered.

## Hooks included
### useMediaQuery
Watches a css media query and returns a boolean if it is satisfied. Uses [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) behind the scenes.
```
import { useMediaQuery } = 'use-media-size';
const isSatisfied = useMediaQuery('(max-width: 100px)')
```

### useMediaSize
```
import { useMediaSize } = 'use-media-size';

// Default
const {isSm, isMd, isLg, isXl} = useMediaSize();

// Override on an individual basis
const {isSm, isMd, isLg, isXl} = useMediaSize({ sm: 520 });
```

### Full usage

#### Standard
```jsx
import React from 'react';
import { useMediaSize } from 'use-media-size';

const App = () => (
  <MyComponent />
)

const MyComponent = () => {
  const { isSm, isMd, isLg, isXl } = useMediaSize();
  return (
    <div>
      {isSm && "Small"}
      {isMd && "Medium"}
      {isLg && "Large"}
      {isXl && "Extra large"}
    </div>
  );
}
```

#####  Defaults
This library defaults to "Twitter bootstrap" sizing.
| | | |
|-|-|-|
|sm|576px|
|md|768px|
|lg|992px|
|xl|1200px|

#### Customize size across the board
The hook will first check for a "parent" context so can be customized for your use case.
 
```jsx
import React from 'react';
import { useMediaSize, MediaSizeQueriesContextProvider } from 'use-media-size';

const App = () => (
    <MediaSizeQueriesContextProvider 
      defaults={{
        sm: 100,
        md: 200
        lg: 400
        xl: 800
      }}
    >
      <MyComponent />
    </MediaSizeQueriesContextProvider>
)

const MyComponent = () => {
  const { isSm, isMd, isLg, isXl } = useMediaSize();
  return (
    <div>
      {isSm && "Small"}
      {isMd && "Medium"}
      {isLg && "Large"}
      {isXl && "Extra large"}
    </div>
  );
}
```

## Server side rendering
Although not tested this library should work with SSR applications.