import { describe, it } from 'node:test';
import { TransformInterceptor } from './transform.interceptor';

describe('TransformInterceptor', () => {
  it('should be defined', () => {
    expect(new TransformInterceptor()).toBeDefined();
  });
});
