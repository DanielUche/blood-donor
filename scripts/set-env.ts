import * as fs from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file


// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const env = argv.environment;

const targetPath = `/src/environments/environment${env ? '.' + env: ''}.ts`;
const envConfigFile = `
export const environment = {
  production: ${env == "prod" ? true : false },
  FIREBASE_APIKEY: "${process.env.FIREBASE_APIKEY}",
  FIREBASE_AUTH_DOMAIN: "${process.env.FIREBASE_AUTH_DOMAIN}",
  FIREBASE_DATABASE_URL: "${process.env.FIREBASE_DATABASE_URL}",
  FIREBASE_PROJECT_ID: "${process.env.FIREBASE_PROJECT_ID}",
  FIREBASE_STORAGE_BUCKET: "${process.env.FIREBASE_STORAGE_BUCKET}",
  FIREBASE_MESAGING_SENDER_ID: "${process.env.FIREBASE_MESAGING_SENDER_ID}",
  FIREBASE_APP_ID: "${process.env.FIREBASE_APP_ID}",
};
`

fs.writeFile(__dirname.slice(0, -8) + targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);return
  }
  console.log(`Output generated at ${targetPath}`);
});