/**
 * Reads the MongoDB environment variables.
 * @param {string} key - The key of the environment variable.
 * @returns {string} - The value of the environment variable.
 */
const readEnv = (key) => {
    return process.env[key];
};

module.exports = { readEnv };
