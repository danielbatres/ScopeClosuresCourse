function greeting() {
    let userName = "Daniel";

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greeting(); // closure

console.log(g);
console.log(g());