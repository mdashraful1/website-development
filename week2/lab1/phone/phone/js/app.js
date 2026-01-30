const callStatus = document.getElementById("callStatus");
const acceptButton = document.getElementById("acceptButton");
const declineButton = document.getElementById("declineButton");
const messageButton = document.getElementById("messageButton");
function resetClasses() {
    callStatus.classList.remove("accepted", "declined", "message");
}
acceptButton.addEventListener("click", () => {
    resetClasses();
    callStatus.textContent = "Call Accepted!";
    callStatus.classList.add("accepted");
});

declineButton.addEventListener("click", () => {
    resetClasses();
    callStatus.textContent = "Call Declined.";
});

messageButton.addEventListener("click", () => {
    resetClasses();
    callStatus.textContent = "Sending Message...wait and call after few minutes";
    callStatus.classList.add("message");
    setTimeout(() => {
        alert("I will call you later please wait");
    }, 200);
});