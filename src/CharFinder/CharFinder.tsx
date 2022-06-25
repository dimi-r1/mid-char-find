import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./CharFinder.module.scss";
import { extractWordParts, getRandomWord } from "./utilities/utilities";

const CharFinder = () => {
    const [textInput, setTextInput] = useState("");
    const [word, setWord] = useState("");
    const [loading, setLoading] = useState(false);

    const setRandomWord = () => {
        setLoading(true);

        getRandomWord().then((newWord) => {
            setLoading(false);
            setWord(newWord);
        });
    };

    // Set a random word on component mount.
    useEffect(() => {
        setRandomWord();
    }, []);

    // Set a random word when requested by the user and clear the text input.
    const handleFetch = useCallback(() => {
        setRandomWord();
        setTextInput("");
    }, []);

    // Set word from user input.
    const handleTextInput = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const userInput = e.target.value.trim();

            setTextInput(userInput);
            if (userInput) {
                setWord(userInput);
                // If the user is clearing the input, set random word once.
            } else if (!(!userInput && !textInput)) {
                setRandomWord();
            }
        },
        [textInput]
    );

    const parts = extractWordParts(word);

    return (
        <Paper className={styles.paper} elevation={0}>
            <Typography className={styles.title} variant="h1">
                Middle character finder
            </Typography>
            <Typography className={styles.title} variant="subtitle1">
                Press the fetch button to retreive a new word or type in a word.
                The middle character(s) will appear in the card below.
            </Typography>
            <Card className={styles.wordCard} elevation={4}>
                <CardContent>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Typography variant="h2" component="p">
                            <span>{parts.left}</span>
                            <strong className={styles.middle}>
                                {parts.middle}
                            </strong>
                            <span>{parts.right}</span>
                        </Typography>
                    )}
                </CardContent>
            </Card>
            <Button variant="outlined" onClick={handleFetch}>
                Fetch random word
            </Button>
            <Typography
                className={styles.orText}
                variant="button"
                component="p"
            >
                OR
            </Typography>
            <TextField
                id="outlined-basic"
                label="Type your own here"
                variant="outlined"
                value={textInput}
                onChange={handleTextInput}
            />
        </Paper>
    );
};

export default CharFinder;
