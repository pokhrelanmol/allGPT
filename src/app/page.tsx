import Image from "next/image";
import HomeInfoText from "./(components)/HomeInfoText";
import { homePageInfo } from "./constants";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center text-white h-screen p-2">
            <h1 className="text-5xl font-bold mb-20 ">AllGPT</h1>
            <div className="flex gap-5 text-center">
                {homePageInfo.map(({ icon, title, text1, text2, text3 }) => (
                    <HomeInfoText
                        icon={icon}
                        title={title}
                        text1={text1}
                        text2={text2}
                        text3={text3}
                    />
                ))}
            </div>
        </main>
    );
}
