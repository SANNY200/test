/**
 * Helper function to format text or strings.
 * @param {string} str - The string to format.
 * @returns {string} - The formatted string.
 */
const formatText = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

module.exports = { formatText };
