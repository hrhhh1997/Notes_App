function getDate() {
    let today = new Date();
    
    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
}

module.exports.getDate = getDate;