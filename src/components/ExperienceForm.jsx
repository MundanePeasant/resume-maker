import '../styles/Form.css'

function ExperienceForm ({onClick}) {
    return (
        <div className="experience-form">
            <form action="">
                <label htmlFor="company">Company: </label>
                <input type="text" name="company" id="company" />
                <br />
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" />
                <br />
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" />
                <label htmlFor="start-date-exp">Start Date: </label>
                <input type="date" name="start-date-exp" id="start-date-exp" />
                <label htmlFor="end-date-exp">End Date: </label>
                <input type="date" name="end-date-exp" id="end-date-exp" />
                <br />
                <label htmlFor="bullets">Bullets: </label>
                <textarea name="bullets" id="bullets" cols="30" rows="10"></textarea>
                <button>Add bullet</button>
                <br />
                <button onClick={onClick}>Add Experience</button>
            </form>
        </div>
    );
}

export default ExperienceForm;