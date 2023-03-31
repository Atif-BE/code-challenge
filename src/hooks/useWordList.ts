import { useEffect, useState } from "react";
import readingInput from "../components/readingInput";

const useWordList = () => {
    const [words, setWords] = useState<string[]>([])
    const inputText = readingInput();

    useEffect(() => {
        const words = inputText.trim().split("\n");
        setWords(words)
    }, [])


    return {
        words,
        setWords
    }

}

export default useWordList;