function EducationForm () {
    return (
        <div className="education-form">
            <form action="">
                <label htmlFor="school">School: </label>
                <input type="text" id="school" name="school" />
                <br />
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" name="location" />
                <br />
                <label htmlFor="study">Major: </label>
                <input type="text" name="study" id="study" />
                <br />
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" name="start-date" id="start-date" />
                <label htmlFor="end-date">End Date: </label>
                <input type="date" name="end-date" id="end-date" />
                <button>Add Education</button>
            </form>
        </div>
    );
}

export default EducationForm;
