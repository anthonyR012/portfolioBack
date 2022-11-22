exports.success = function (res, message = 'Succesfully', status = 200) {
    let statusCode = status;
    let statusMessage = message || '';

    res.status(status).send(
        {
            body: statusMessage,
            status: statusCode,
            error: false,
        }
    );
};

exports.error = function (res, message = 'Internal Server Error', status = 500) {
    let statusCode = status;
    let statusMessage = message;


    res.status(status).send(
        {
            body: statusMessage,
            status: statusCode,
            error: true,
        }
    );
};