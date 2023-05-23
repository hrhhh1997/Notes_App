function getDate() {
    let today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
}

document.querySelector('.date-div').textContent = getDate();