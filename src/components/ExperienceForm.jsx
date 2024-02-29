import '../styles/Form.css'

function ExperienceForm () {
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
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" name="start-date" id="start-date" />
                <label htmlFor="end-date">End Date: </label>
                <input type="date" name="end-date" id="end-date" />
                <br />
                <label htmlFor="bullets">Bullets: </label>
                <textarea name="bullets" id="bullets" cols="30" rows="10"></textarea>
                <button>Add bullet</button>
                <br />
                <button>Add Experience</button>
            </form>
        </div>
    );
}

export default ExperienceForm;