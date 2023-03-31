import { useEffect, useState } from 'react'
import useWordList from '../hooks/useWordList';

const ShowList = () => {
    const { words, setWords } = useWordList();
    const [ combinations, setCombinations ] = useState<string[]>([])
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        const sixLetterWords = words.filter(word => word.length === 6 && word.trim() !== ``);
        const wordPairs: string[] = [];

        for (let i = 0; i < sixLetterWords.length; i++) {
            for (let j = i + 1; j < sixLetterWords.length; j++) {
                const word1 = words[i];
                const word2 = words[j];
                const combo = word1 + word2;
                if (combo.length === 6 && sixLetterWords.includes(combo)) {
                    wordPairs.push(combo);
                }
            }
        }

        setCombinations(wordPairs);
        setIsLoaded(true);
    }, [words])

    if(!isLoaded){
        return <div>Loading....</div>
    } else {
        return (
            <div style={{ display: 'flex', width: "100vw", flexWrap: "wrap" }}>
                {combinations.map((element, index) => <p key={index}>{element},</p>)}
            </div>
        )
    }
}

export default ShowList;