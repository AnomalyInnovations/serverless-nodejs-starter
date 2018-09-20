import goodbye from './goodbye';

const handler = async (event, context, callback) => goodbye(callback);

export default handler;
