import { TimeoutInterceptor } from './timeout.interceptor';

describe('TimeoutInterceptor', () => {
  it('create an instance', () => {
    const interceptor = new TimeoutInterceptor();
    expect(interceptor).toBeTruthy();
  });
});
