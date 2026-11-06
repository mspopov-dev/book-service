const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    let status = 500;
    let error = 'Internal Server Error';

    if (err.message?.toLowerCase().includes('not found')) {
        status = 404;
        error = 'Not Found';
    } else if (err.name === 'ValidationError') {
        status = 400;
        error = 'Bad Request';
    }

    return res.status(status).json({
        timestamp: new Date().toISOString(),
        status,
        error,
        message: err.message,
        path: req.path
    });
}

export default errorHandler;
