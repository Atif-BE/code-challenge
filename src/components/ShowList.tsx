import { useEffect, useState } from 'react'
import useWordList from '../hooks/useWordList';

const ShowList = () => {
    const { words, setWords } = useWordList();
    const [ combinations, setCombinations ] = useState<string[]>([])
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        const sixLetterWords = words.filter(word => word.length === 6 && word.trim() !== ``);
        const wordPairs: any = [];

        for (let i = 0; i < sixLetterWords.length; i++) {
            for (let j = i + 1; j < sixLetterWords.length; j++) {
                const word1 = sixLetterWords[i];
                const word2 = sixLetterWords[j];
                console.log(word1, word2)
                const combo = word1?.slice(0, 2) + word2?.slice(2);
                if (sixLetterWords.includes(combo)) {
                    wordPairs.push(combo);
                }
            }
        }

        setCombinations(wordPairs);
        setIsLoaded(true);
        console.log(combinations);
    }, [words])

    if(!isLoaded){
        return <div>Loading....</div>
    }

    return (
        <div style={{display:'flex', width:"100vw", flexWrap:"wrap"}}>
            {combinations.map(element => <p>{element},</p>)}
        </div>
    )
}

export default ShowList;