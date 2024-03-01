

function PersonalCV (props) {
    console.log(props);

    if(!props){
        return null;
    }

    return (
        <>
        <div className="name">{props.header.name}</div>
        <div className="email">{props.header.email}</div>
        <div className="phone">{props.header.phone}</div>
        <div className="address">{props.header.address}</div>
        </>
    )
}

export default PersonalCV;