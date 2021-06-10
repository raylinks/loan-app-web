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
    const errorCount = Object.values(errors).length;
    if (errorCount < 1) {
        return showDefaultToastNotification(message);
    }

    let content = document.createElement("div");
    Object.values(errors)[0].map((error) => {
        let list = document.createElement("p");
        list.appendChild(document.createTextNode(error));
        content.appendChild(list);
    });
    app.$wkToast(content, {
        className: ["wk-alert"],
    });
};

export default errorHandler;
