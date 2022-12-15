module.exports = async function (context, req) {

    const responseMessage = "This is a message from the Azure Function API yoohoo !"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {text: responseMessage}
    };
}