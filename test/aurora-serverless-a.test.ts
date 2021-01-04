import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as AuroraServerlessA from "../lib/aurora-serverless-a-stack";

test("Empty test", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AuroraServerlessA.AuroraServerlessAStack(
    app,
    "MyTestStack"
  );
  // THEN
});
