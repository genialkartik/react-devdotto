# react-devdotto

![Frame 1](https://user-images.githubusercontent.com/89431059/193343099-a70d21ec-6cd6-4211-990e-560607e2b7dd.png)


> Embed your Posts on Dev.to into your React Project.

[![NPM](https://img.shields.io/npm/v/react-devdotto?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-devdotto)
[![Forks](https://img.shields.io/github/forks/genialkartik/react-devdotto?style=for-the-badge&logo=github)](https://github.com/genialkartik/react-devdotto)
![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red?style=for-the-badge&logo=open-source-initiative)

## Installation

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
import DevDotTo from "react-devdotto";
const App = () => {
  return (
    <DevDotTo
      username="genialkartik"
      coverimage={true}
      darkMode={true}
      hideTags={false}
      numberOfPosts={5}
    />
  );
};

export default App;
```

## Props

Props of the `DevDotTo` component are avilable below.

| Name          | Type    | Default      | Description                                                                           |
| ------------- | ------- | ------------ | ------------------------------------------------------------------------------------- |
| username      | string  | genialkartik | `username` can be found on [dev.to](https://dev.to) platform                          |
| coverimage    | boolean | true         | if `false`, feature image (cover image) will be replace with description of the blog. |
| darkMode      | boolean | true         | toggle to `false`, to view blogs list in light mode.                                  |
| hideTags      | boolean | false        | use to hide tags in blogs list.                                                       |
| numberOfPosts | number  |              | get specific number of posts.                                                         |

<br/>

## Contribute

- Fork or Clone this Repository.
- Navigate `cd react-devdotto`.
- run `npm install` to install all required dependencies.
- Make changes or fix bug.
- Make sure to run build `npm build` before commiting all changes.
- Raise a pull request.<br>

  Now lemme buy you a coffee :coffee:.

## License

MIT © [genialkartik](https://github.com/genialkartik)
