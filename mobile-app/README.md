# StreamHub Mobile

React Native CLI app — Home + Profile. No Expo.

## Layout

```
src/
  screens/             route screens
  features/home/       home-only UI chunks
  components/          shared widgets
  repositories/        data access
  data/                mocks
  navigation/
  theme/
  types/
  utils/
```

## Setup

```powershell
.\scripts\init-rn-cli.bat
npm start
npm run android
```

## Debug APK

```powershell
cd android
.\gradlew.bat assembleDebug
```

`android\app\build\outputs\apk\debug\app-debug.apk`
