import {useState} from "react";

const api = {
    url: "https://official-joke-api.appspot.com/random_joke"
}
function Jokes() {
    const [randomJoke, setRandomJoke] = useState(null);
    const generate = () => {
        fetch(api.url).then(res => res.json()).then(result => {

        })
    }
    return (
        <div className="jokes-section">
            <h1 className="jokes-section__title">Generate random joke</h1>
            <div className="jokes-section__answer">
                <p className="jokes-section__setup">What is the tallest building in the world?</p>
                <p className="jokes-section__punchline">The library, it’s got the most stories!</p>
            </div>
            <button className="jokes-section__button"
            onClick={generate}
            >generate!</button>
        </div>
    )
}
export default Jokes;