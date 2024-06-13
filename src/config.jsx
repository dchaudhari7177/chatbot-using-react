import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider.jsx";
import MessageParser from "./MessageParser.jsx";

const config = {
    botName: "ChatBot",
    initialMessages: [createChatBotMessage("Say Hello")],
    actionProvider: ActionProvider,
    messageParser: MessageParser,
};

export default config;
