# StreamHub

Creator streaming UI — separate web and mobile frontends.

```
test/
├── web-frontend/    # Next.js
└── mobile-app/      # React Native CLI (no Expo)
```

## Web (Next.js)

```bash
cd web-frontend
npm install
npm run dev
```

## Mobile (React Native CLI)

```powershell
cd mobile-app
.\scripts\init-rn-cli.bat
npm start
npm run android
```

Debug APK:

```powershell
cd mobile-app\android
.\gradlew.bat assembleDebug
```

Output: `android\app\build\outputs\apk\debug\app-debug.apk`
