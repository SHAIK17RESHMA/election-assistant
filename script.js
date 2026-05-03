const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerHTML = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(text) {
    let typing = document.createElement("div");
    typing.classList.add("message", "bot");
    typing.innerHTML = "Typing...";
    chatBox.appendChild(typing);

    setTimeout(() => {
        typing.innerHTML = text;
    }, 700);
}

function sendMessage() {
    let inputBox = document.getElementById("userInput");
    let text = inputBox.value.toLowerCase().trim();

    if (!text) return;

    addMessage(text, "user");
    inputBox.value = "";

    processInput(text);
}

function quickReply(type) {
    addMessage(type, "user");
    processInput(type);
}

function processInput(input) {

    if (input.includes("india")) {
        botReply(`<b>India Elections:</b><br>
        Conducted by Election Commission of India ensuring free & fair voting.`);
    }

    else if (input.includes("process")) {
        botReply(`<b>Election Process:</b><br>
        1. Announcement<br>
        2. Nomination<br>
        3. Campaigning<br>
        4. Voting<br>
        5. Counting<br>
        6. Results`);
    }

    else if (input.includes("timeline")) {
        botReply(`<b>Election Timeline:</b><br>
        Day 1: Announcement<br>
        Day 5: Nominations<br>
        Day 15: Campaign Ends<br>
        Day 20: Voting<br>
        Day 22: Results`);
    }

    else if (input.includes("vote") || input.includes("steps")) {
        botReply(`<b>How to Vote:</b><br>
        ✔ Check registration<br>
        ✔ Visit booth<br>
        ✔ Verify ID<br>
        ✔ Cast vote`);
    }

    else if (input.includes("eligibility")) {
        botReply(`<b>Eligibility:</b><br>
        ✔ Age 18+<br>
        ✔ Citizen<br>
        ✔ Valid voter ID`);
    }

    else {
        botReply("Ask about process, timeline, voting, eligibility or India 🇮🇳");
    }
}

window.onload = () => {
    botReply("Hi! I'm your Election Assistant 🤖");
};