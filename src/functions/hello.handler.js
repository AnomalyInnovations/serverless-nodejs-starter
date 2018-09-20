import hello from './hello';

const handler = async (event, context, callback) => hello(callback);

export default handler;
