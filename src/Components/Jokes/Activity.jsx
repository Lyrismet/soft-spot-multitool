import {useState} from "react";

const api = {
    url: "https://www.boredapi.com/api/activity"
}
function Activity() {
    const [randomActivity, setRandomActivity] = useState(null);
    const generate = () => {
        fetch(api.url).then(res => res.json()).then(result => {
            setRandomActivity({
                activity: result.activity
            })
        })
    }
    return (
        <div className="activity-section">
            <h1 className="activity-section__title">Generate random activity</h1>
            {randomActivity ? (
            <div className="activity-section__answer">
                <p className="activity-section__setup">{randomActivity?.activity}</p>
            </div>
            ) : null}
            <button className="activity-section__button" onClick={generate}>generate!</button>
        </div>
    )
}
export default Activity;