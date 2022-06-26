import React from "react";
import { Paper, Typography } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
import styles from "./About.module.scss";

const About = () => (
    <Paper className={styles.paper} elevation={0}>
        <Typography gutterBottom variant="h1">
            About Midchar
        </Typography>
        <Typography className={styles.text} variant="subtitle1">
            Midchar is a create-react-app web application that uses material UI
            components, scss and typescript to render a random word and indicate
            the middle character(s). The main functionality is on the Home page
            where a new random word will appear each time the page loads. The
            user can also fetch a new word by using the fetch button and can
            also type in a custom word.
        </Typography>
        <Typography gutterBottom variant="h2" component="h2">
            How to use the component?
        </Typography>
        <Typography className={styles.text} variant="subtitle1">
            The component that contains the business logic is called{" "}
            <strong> {"<CharFinder/>"}</strong>. To use this component in your
            react app, simply render it under the main{" "}
            <strong> {"<App/>"}</strong> component or a route.
        </Typography>

        <Typography gutterBottom variant="h2" component="h2">
            App.tsx example:
        </Typography>

        <CopyBlock
            className={styles.codeblock}
            text={`const App = () => (
                <>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <NavBar />
                        <CharFinder />
                    </ThemeProvider>
                </>
            );
            
            export default App;`}
            language="typescript"
            theme={dracula}
            wrapLines={false}
        />

        <Typography gutterBottom variant="h2" component="h2">
            Routes example:
        </Typography>

        <CopyBlock
            text={`ReactDOM.render(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="/" element={<CharFinder />} />
                            <Route path="/about" element={<About />} />
                        </Route>
                    </Routes>
                </BrowserRouter>,
                document.getElementById("root")
            );`}
            language="typescript"
            theme={dracula}
            wrapLines={false}
        />

        <Typography gutterBottom variant="h2" component="h2">
            Find middle character logic:
        </Typography>
        <CopyBlock
            text={`export const extractWordParts = (word: string) => {
                let position; // index of middle char
                let length; // amount of chars to take
            
                if (isOdd(word.length)) {
                    position = word.length / 2;
                    length = 1;
                } else {
                    position = word.length / 2 - 1;
                    length = 2;
                }
            
                // Return the left, middle and right parts of the word as an object
                // to be able to style the segments seperately
                const wordParts = {
                    left: word.substring(0, position),
                    middle: word.substring(position, position + length),
                    right: word.substring(position + length, word.length),
                };
            
                return wordParts;
            };`}
            language="typescript"
            theme={dracula}
            wrapLines={false}
        />
    </Paper>
);

export default About;
