// import { MongoClient } from 'mongodb';

// declare global {
//   namespace NodeJS {
//     interface Global {
//       _mongoClientPromise?: Promise<MongoClient>;
//     }
//   }
// }
// global.d.ts
import { MongoClient } from 'mongodb';

// declare global {
//   const _mongoClientPromise: Promise<MongoClient> | undefined;
// }
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
  