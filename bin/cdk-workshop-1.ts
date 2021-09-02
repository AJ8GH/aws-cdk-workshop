#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshop1Stack } from '../lib/cdk-workshop-1-stack';

const app = new cdk.App();
new CdkWorkshop1Stack(app, 'CdkWorkshop1Stack');
