

function EducationCV(props) {
    const {education, onClick} = props;

    const eduStints = education.map(edu =>
        <div key={edu.id}>
        <div>{edu.school}</div>
        <div>{edu.startDate}</div>
        <div>{edu.endDate}</div>
        <div>{edu.study}</div>
        <div>{edu.location}</div>
        <button onClick={()=> onClick(edu)}>Edit</button>
        </div>)

    return (
    <>{eduStints}</>
    );
}

export default EducationCV;