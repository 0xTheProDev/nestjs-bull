import * as Bull from 'bull';
import { BullQueueProcessor, BullQueueProcessorCallback } from './bull.types';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface BullModuleOptions {
  name?: string;
  options?: Bull.QueueOptions;
  processors?: BullQueueProcessor[];
}

export interface BullOptionsFactory {
  createBullOptions(): Promise<BullModuleOptions> | BullModuleOptions;
}

export interface BullModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  useExisting?: Type<BullOptionsFactory>;
  useClass?: Type<BullOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<BullModuleOptions> | BullModuleOptions;
  inject?: any[];
}

export interface QueueProcessDecoratorOptions {
  name?: string;
  concurrency?: number;
}

export interface QueueDecoratorOptions {
  name?: string;
}

export interface BullQueueAdvancedProcessor {
  concurrency?: number;
  name?: string;
  callback: BullQueueProcessorCallback;
}
