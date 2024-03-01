

function ExperienceCV(props) {

    const experiences = props.experience.map(exp =>
        <div key={exp.id}>
            <div>{exp.company}</div>
            <div>{exp.location}</div>
            <div>{exp.title}</div>
            <div>{exp.startDate}</div>
            <div>{exp.endDate}</div>
            <div>{exp.bullets.map(bullet => 
                <div key={bullet}>{bullet}</div>)}</div>
        </div>)

    return (<>
    {experiences}
    </>)
}

export default ExperienceCV;