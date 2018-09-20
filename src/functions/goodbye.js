import { success, failure } from '../libs/response';

const goodbye = async (callback) => {
  try {
    const response = {
      message: `Go Serverless v1.0! ${await message({
        time: 0.1,
        copy: 'Your function executed successfully!',
      })}`,
    };
    callback(null, success(response));
  } catch (err) {
    console.error(err);
    callback(null, failure({ message: err.message }));
  }
};

const message = ({ time, ...rest }) => new Promise(resolve => setTimeout(() => {
  resolve(`${rest.copy} (with a ${time} second delay)`);
}, time * 1000));

export default goodbye;
