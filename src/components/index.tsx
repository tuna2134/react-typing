import React from "react";

export const TypingAnimation: React.FC<{ text: string, speed: number }> = ({ text, speed }) => {
    let [currentText, setCurrentText] = React.useState<string>("");
    let [index, setIndex] = React.useState<number>(0);
    React.useEffect(() => {
        if (index < text.length) {
            let repeatTimeout = setTimeout(() => {
                setCurrentText(currentText + text.charAt(index));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(repeatTimeout);
        }
    }, [index, speed, text, currentText]);
    return <>{currentText}</>;
}