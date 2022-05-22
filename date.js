exports.getDate = function () {

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    });
    return date;
}