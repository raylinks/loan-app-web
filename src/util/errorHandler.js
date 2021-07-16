import app from "../main";

const errorHandler = (errorResponse, showToast = false) => {
    const { status, data } = errorResponse;
    const { message, errors } = data;

    console.log(app);

    return new Promise((resolve) => {
        switch (status) {
            case 500:
                showDefaultToastNotification("An error occurred, Please try again later.");
                resolve(message, errors);
                break;

            case 422:
                if (showToast) {
                    showValidationToastNotification(errors, message);
                }
                resolve(message, errors);
                break;
            case 301:
                resolve(message, errors);
                break;
            default:
                showDefaultToastNotification(message);
                resolve(message, errors);
                break;
        }
    });
};

const showDefaultToastNotification = (message) =>
    app.$wkToast(message, {
        className: ["wk-alert"],
    });

const showValidationToastNotification = (errors, message) => {
    const allValidationErrors = Object.values(errors);
    const errorCount = allValidationErrors.length;
    if (errorCount < 1) {
        return showDefaultToastNotification(message);
    }

    const mainError = allValidationErrors[0].message;

    app.$wkToast(mainError, {
        className: ["wk-alert"],
    });
};

export default errorHandler;
