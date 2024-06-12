class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const message = this.createChatBotMessage("Hello, how can I help you?");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
    greet1() {
        const message = this.createChatBotMessage("Ok, Buyyyy, See you again!!");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}

export default ActionProvider;
