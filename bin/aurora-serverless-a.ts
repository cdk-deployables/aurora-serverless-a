#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AuroraServerlessAStack } from '../lib/aurora-serverless-a-stack';

const app = new cdk.App();
new AuroraServerlessAStack(app, 'AuroraServerlessAStack');
