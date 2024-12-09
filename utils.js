const createError = error => {
    return {
        status: "error",
        error,
    };
};

const createSuccess = data => {
    return {
        status: "success",
        data,
    };
};

const createResult = (error, result) => {
    return error ? createError(error) : createSuccess(result);
};

module.exports = {
    createError,
    createSuccess,
    createResult,
};
