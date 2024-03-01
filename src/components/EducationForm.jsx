import '../styles/Form.css'

function EducationForm ({onClick}) {
    return (
        <div className="education-form">
            <form action="">
                <label htmlFor="school">School: </label>
                <input type="text" id="school" name="school" />
                <br />
                <label htmlFor="location-edu">Location: </label>
                <input type="text" id="location-edu" name="location-edu" />
                <br />
                <label htmlFor="study">Major: </label>
                <input type="text" name="study" id="study" />
                <br />
                <label htmlFor="start-date-edu">Start Date: </label>
                <input type="date" name="start-date-edu" id="start-date-edu" />
                <label htmlFor="end-date-edu">End Date: </label>
                <input type="date" name="end-date-edu" id="end-date-edu" />
                <button onClick={onClick}>Add Education</button>
            </form>
        </div>
    );
}

export default EducationForm;
