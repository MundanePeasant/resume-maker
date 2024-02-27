import '../styles/Form.css'

function PersonalForm () {
    return (
        <div className="personal-form">
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <br />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <br />
                <label htmlFor="address">City & Zip Code</label>
                <input type="text" name="address" id="address" />
                <button>Add Personal Info</button>
            </form>
        </div>
    )
}

export default PersonalForm;