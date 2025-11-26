# react-absolute

- [react-absolute](#react-absolute)
- [What is react-absolute](#what-is-react-absolute)
- [Install](#install)
  - [Getting Started / Usage](#getting-started--usage)
    - [Preconfig for using.](#preconfig-for-using)
    - [Usage](#usage)
- [Interfaces & methods](#interfaces--methods)
- [Contact us](#contact-us)

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20web-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/@actbase/react-absolute.svg?style=flat-square)](https://www.npmjs.com/package/@actbase/react-absolute)
[![npm](https://img.shields.io/npm/dm/@actbase/react-absolute.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/@actbase/react-absolute)


[![github issues](https://img.shields.io/github/issues/actbase/react-absolute.svg?style=flat-square)](https://github.com/actbase/react-absolute/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/actbase/react-absolute.svg?style=flat-square&colorB=44cc11)](https://github.com/actbase/react-absolute/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/actbase/react-absolute.svg?style=flat-square&colorB=44cc11)](https://github.com/actbase/react-absolute/issues)


# What is react-absolute

As already known React is very powerful framework for development. 
In JSX Struct we don't need to learn new feature.
Developers sometimes should make some dependent component without main render block.
We know some how appearencing custom Component on any time and any point. If you want using react js more powerfull should consider using our "react-absolute" solution. 

# Install

- Using npm
``` 
npm install @actbase/react-absolute;
```

- Using yarn
```
yarn add @actbase/react-absolute;
```

## Getting Started / Usage

### Preconfig for using.
- On very first entry point. index.js or app.js 
- Make sure wrapping with Absolute

```
import Absolute from '@actbase/react-absolute';

const App = ()=>{
  return (
    <Absolute.Provider style={{flex:1}}>
      {/* rendered components before. */}
    </Absolute.Provider>
  )
}
export App;
```
### Usage 

- Using with render block
```
import Absolute from '@actbase/react-absolute';

const SomeComponent = ({})=>{
  if( condition ) return null;  
  return (
    <Absolute style={{}}>
    
    </Absolute>
  )
}
```

- Using with event function.

```
<SomeEventProvider someEventHandler={()=>{
  // adding absolute on your purpose.
  const handler = Absolute.add(
    <ToBeAboluteComponentYouHave />
  );

  // remove.
  handler.remove();
}} />
```

# Interfaces & methods

- props of Absolute.Provider
  - Methods 
    - add

# Contact us

If you consider make service with react. 

Call us
