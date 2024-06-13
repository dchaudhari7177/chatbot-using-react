class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const message = this.createChatBotMessage("say meet");
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

    btn() {
        const message = this.createChatBotMessage(<button>say bye</button>);
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
    
    clr() {
        const message = this.createChatBotMessage("Thank YOu");
        this.setState((prev) => ({
            ...prev,
            messages: [message,],
        }));
    }

}

export default ActionProvider;
