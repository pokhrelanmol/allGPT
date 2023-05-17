"use client";
import React from "react";
import { IHomeInfoTextProps } from "../types";

const HomeInfoText = ({
    icon,
    title,
    text1,
    text2,
    text3,
}: IHomeInfoTextProps) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <i className="h-6 w-6 text-blue-500">{icon}</i>
                <h2 className="text-2xl">{title}</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText">{text1}</p>
                <p className="infoText">{text2}</p>
                <p className="infoText">{text3}</p>
            </div>
        </div>
    );
};

export default HomeInfoText;
