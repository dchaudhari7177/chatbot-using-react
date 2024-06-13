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
        if(lowerCaseMessage.includes("meet")){
            this.actionProvider.btn();
        }
        if(lowerCaseMessage.includes("clear")){
            this.actionProvider.clr();
        }
    }
}

export default MessageParser;
