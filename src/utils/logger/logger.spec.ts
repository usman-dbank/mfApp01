import { logger } from './logger';

describe('Logger', () => {
  it('should call the logger methods successfully', async () => {
    const message = 'This is message';
    const mockLogFn = jest.spyOn(logger, 'log').mockImplementationOnce(jest.fn);
    const mockWarnFn = jest.spyOn(logger, 'warn').mockImplementationOnce(jest.fn);
    const mockErrorFn = jest.spyOn(logger, 'error').mockImplementationOnce(jest.fn);
    await logger.log(message);
    expect(logger.log).toBeDefined();
    await logger.log(message);
    expect(logger.log).toBeDefined();
    expect(mockLogFn).toHaveBeenCalledWith(message);

    await logger.warn(message);
    expect(logger.warn).toBeDefined();
    expect(mockWarnFn).toHaveBeenCalledWith(message);
    await logger.error(message);
    expect(logger.error).toBeDefined();
    expect(mockErrorFn).toHaveBeenCalledWith(message);
    mockLogFn.mockRestore();
  });
});
