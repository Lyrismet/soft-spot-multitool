import {useState} from "react";

const api = {
    url: "https://official-joke-api.appspot.com/random_joke"
}
function Jokes() {
    const [randomJoke, setRandomJoke] = useState(null);
    const generate = () => {
        fetch(api.url).then(res => res.json()).then(result => {
            setRandomJoke({
                setup: result.setup,
                punchline: result.punchline
            })
        })
    }
    return (
        <div className="jokes-section">
            <h1 className="jokes-section__title">Generate random joke</h1>
            {randomJoke ? (
            <div className="jokes-section__answer">
                <p className="jokes-section__setup">{randomJoke.setup}</p>
                <p className="jokes-section__punchline">{randomJoke.punchline}</p>
            </div>
            ) : null}
            <button className="jokes-section__button"
            onClick={generate}
            >generate!</button>
        </div>
    )
}
export default Jokes;