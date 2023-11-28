const sendErrorResponse = (res, errorMessage, statusCode = 500) => {
    console.error(errorMessage);
    res.status(statusCode).json({ error: errorMessage });
};

module.exports = { sendErrorResponse };
