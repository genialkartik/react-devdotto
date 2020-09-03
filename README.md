# react-devdotto

> Embed your Posts on Dev.to into your React Project.

[![NPM](https://img.shields.io/npm/v/react-devdotto.svg)](https://www.npmjs.com/package/react-devdotto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![HitCount](http://hits.dwyl.com/genialkartik/react-devto.svg)](http://hits.dwyl.com/genialkartik/react-devto)

## Install

using NPM:
```bash
  npm install --save react-devdotto
```
using YARN:
```bash
  yarn add react-devdotto
```

## Usage

```jsx

import { DevDotTo } from 'react-devdotto'
// username can be found on dev.to
// remove coverimage by adding props 'coverimag={false}', default is true
const App = () => {
  return <DevDotTo username="genialkartik" />
}

export default App
```

## License

MIT © [genialkartik](https://github.com/genialkartik)
