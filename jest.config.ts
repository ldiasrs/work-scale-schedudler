// import type { Config } from "jest";

// const config: Config = {
//   // ...
//   verbose: true,
//   moduleNameMapper: {
//     "@application/(.*)": "<rootDir>/src/application/$1",
//   }
// };

// export default config;

import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  moduleNameMapper: {
    "@application/(.*)": "<rootDir>/src/application/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1",
    "@infra/(.*)": "<rootDir>/src/infra/$1",
  }
}
export default config