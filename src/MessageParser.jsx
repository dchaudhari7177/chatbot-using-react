class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        }
        if(lowerCaseMessage.includes("bye")) {
            this.actionProvider.greet1();
        }
    }
}

export default MessageParser;
