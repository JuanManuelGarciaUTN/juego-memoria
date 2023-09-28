import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jmg.juegodememoria',
  appName: 'juego-de-memoria',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    SplashScreen: {
      launchAutoHide: false,
    }
  }
};

export default config;
