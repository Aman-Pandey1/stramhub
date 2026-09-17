# StreamHub Mobile — React Native CLI (no Expo)

Home + Profile screens. Pure **React Native CLI** (`react-native`), not Expo.

## Setup (one time)

```powershell
cd G:\Aman\test\mobile-app

# wipe old Expo node_modules if present
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# generate real android/ + ios/ via RN CLI, then npm install
.\scripts\init-rn-cli.bat
```

Needs: Node 18+, JDK 17, Android Studio (SDK + emulator).

## Run

```powershell
npm start
# other terminal:
npm run android
```

## Debug APK

```powershell
cd android
.\gradlew.bat assembleDebug
```

Or from app root:

```powershell
npm run apk:debug
```

Output:

`android\app\build\outputs\apk\debug\app-debug.apk`

## Structure

```
mobile-app/
├── android/          # RN CLI (after init-rn-cli)
├── ios/              # RN CLI (after init-rn-cli; build on macOS)
├── src/
│   ├── screens/
│   ├── components/
│   ├── navigation/
│   ├── data/
│   ├── services/
│   ├── theme/
│   └── types/
├── App.tsx
├── index.js          # AppRegistry (CLI entry)
├── metro.config.js
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Metro bundler |
| `npm run android` | Install + launch on device/emulator |
| `npm run apk:debug` | Build debug APK |
| `npm run native:init` | (Re)generate android/ios via RN CLI |
