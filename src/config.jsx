import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider.jsx";
import MessageParser from "./MessageParser.jsx";

const config = {
    botName: "ChatBot",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. Ask me anything!")],
    actionProvider: ActionProvider,
    messageParser: MessageParser,
};

export default config;
