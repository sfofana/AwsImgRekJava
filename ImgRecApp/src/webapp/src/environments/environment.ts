// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailUrl: 'https://node-jsfofana-bank-v2.herokuapp.com/api/v1/email/send',
  upload: 'http://ec2-3-17-26-55.us-east-2.compute.amazonaws.com:9000/api/v1/upload',
  compare: 'http://ec2-3-17-26-55.us-east-2.compute.amazonaws.com:9000/api/v1/compare'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
