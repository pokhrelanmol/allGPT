import { IHomeInfoTextProps } from "./types";
import { SunIcon } from "@heroicons/react/24/outline";
export const homePageInfo: IHomeInfoTextProps[] = [
    {
        icon: "🌤️",
        title: "Examples",
        text1: '"Explain the quantum physics like I am 5"',
        text2: '"How to unlearn bad habits and learn good ones"',
        text3: '"What is the meaning of life ?"',
    },
    {
        icon: "📈",
        title: "Capabilities",
        text1: "Change the GPT Model to use",
        text2: "Chats gets saved to your account in Database",
        text3: "It will remember the context of the conversation",
    },
    {
        icon: "😢",
        title: "Limitations",
        text1: "It is not a human so it will not understand everything",
        text2: "Answer will be based on the model you choose",
        text3: "The model is not perfect so it will make mistakes",
    },
];
