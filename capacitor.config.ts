import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fas-wsl.app',
  appName: 'fas-wsl-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
