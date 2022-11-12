// https://docs.expo.dev/versions/latest/config/app/

const MAJOR_VERSION_NUMBER = 2;
const MINOR_VERSION_NUMBER = 1;
const PATCH_VERSION_NUMBER = 20221110;
const FULL_APP_VERSION = MAJOR_VERSION_NUMBER + "." + MINOR_VERSION_NUMBER + "." + PATCH_VERSION_NUMBER;
const PACKAGE = "com.findhumane.manifestcrash";
const BGCOLOR = "#ffffff";

export default {
  name: "manifestcrash",
  slug: "manifestcrash",
  owner: "findhumane",
  version: FULL_APP_VERSION,
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#00000000",
  },
  updates: {
    enabled: false,
    url: "https://u.expo.dev/9dba7f74-3e3b-489c-b3a7-ce7bcb75f582"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: PACKAGE,
    buildNumber: FULL_APP_VERSION,
    usesAppleSignIn: false,
  },
  android: {
    package: PACKAGE,
    versionCode: MAJOR_VERSION_NUMBER,
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: BGCOLOR
    },
    config: {
      googleMaps: {
        apiKey: "test"
      }
    },
    permissions: [
      "ACCESS_COARSE_LOCATION",
    ],
    backgroundColor: BGCOLOR,
  },
  androidStatusBar: {
    translucent: true,
    backgroundColor: "#00000000",
  },
  web: {
    favicon: "./assets/favicon.png",
    build: {
      babel: {
        include: [
          "@ui-kitten/components"
        ]
      }
    }
  },
  developmentClient: {
    silentLaunch: true,
  },
  extra: {
    test: "Test data",
    googleWebApiKey: "test",
    googleWebApiKeyServers: "test",
    googleNoRestrictionsKey: "test",
    eas: {
      projectId: "9dba7f74-3e3b-489c-b3a7-ce7bcb75f582"
    }
  },
  runtimeVersion: {
    policy: "sdkVersion"
  }
}
