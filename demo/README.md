# react-devdotto

> Embed your Posts on Dev.to into your React Project.

## To Test Demo:

## Install

```bash
	create-react-app devdotto
	npm install --save react-devdotto
```

## Usage

### Edit scr/App.js
```jsx

import React from 'react';
import DevDotTo from 'react-devdotto';
import './App.css';

function App() {
  return (
    <div className="App">
      <DevDotTo username="genialkartik" />    
    </div>
  );
}

export default App;
```
## Run your App
```bash
	npm start
```

## License

MIT © [genialkartik](https://github.com/genialkartik)
