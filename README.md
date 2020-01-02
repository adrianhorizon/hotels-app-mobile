## Hotels mobile

- hotels aplication mobile react native
- two microservices local `http://localhost:3000`, production `https://hotelsapp.adrianhorizon.now.sh`
- [Dowload android apk click](https://kitwiissy.s3.amazonaws.com/app-release.apk)

### Run IOS

- [guide steps install run ios on device](https://facebook.github.io/react-native/docs/running-on-device)

- steps emulator run ios

1. `$ npm install` or `$ yarn`
2. `$ cd ios`
3. `$ pod install`
4. `$ npm run ios`

### Run Android

- [guide steps install run android on device click open](https://facebook.github.io/react-native/docs/running-on-device)

- [steps run android emulator, mac, linux, windows, spanish guide click open](https://platzi.com/clases/1292-react-native/11680-instalando-el-entorno/)

- other option installed android studio an emulator this steps

1. `$ npm install` or `$ yarn`
2. `$ npm run android`

### requirements

- `React native`
- `React`
- `Redux`

### Pattern design

- use pattern observer and modularity aplication and store redux for caching and persist information.

```
├── test
└── src
│   ├── components
│   ├── containers
│   ├── redux
|   |   └── reducers
│   ├── screens
|   |   ├── components
|   |   └── containers
│   └── utils
```
