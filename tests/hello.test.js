import * as handlers from '../handlers';

describe('hello', () => {
  test('it should call the callback', async () => {
    const event = {};
    const context = {};
    const callback = jest.fn();

    await handlers.hello(event, context, callback);

    expect(callback.mock.calls).toHaveLength(1);
  });

  test('callback should be called with null as the error parameter', async () => {
    const event = {};
    const context = {};
    const callback = jest.fn();

    await handlers.hello(event, context, callback);

    expect(callback.mock.calls[0][0]).toBe(null);
  });

  test('callback should be called with a 200 status code', async () => {
    const event = {};
    const context = {};
    const callback = jest.fn();

    await handlers.hello(event, context, callback);

    expect(callback.mock.calls[0][1].statusCode).toBe(200);
  });

  test('callback should be called with a string as the response parameter', async () => {
    const event = {};
    const context = {};
    const callback = jest.fn();

    await handlers.hello(event, context, callback);

    expect(typeof callback.mock.calls[0][1].body).toBe('string');
  });

  test('the response body parameter should be JSON parseable', async () => {
    const event = {};
    const context = {};
    const callback = jest.fn();

    await handlers.hello(event, context, callback);

    const { body } = callback.mock.calls[0][1];
    let error = false;
    try {
      JSON.parse(body);
    } catch (err) {
      error = true;
    }
    expect(error).toBe(false);
  });
});
