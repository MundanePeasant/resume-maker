

function EducationCV(props) {

    const eduStints = props.education.map(edu =>
        <div key={edu.id}>
        <div>{edu.school}</div>
        <div>{edu.startDate}</div>
        <div>{edu.endDate}</div>
        <div>{edu.study}</div>
        <div>{edu.location}</div>
        </div>)

    return (
    <>{eduStints}</>
    );
}

export default EducationCV;