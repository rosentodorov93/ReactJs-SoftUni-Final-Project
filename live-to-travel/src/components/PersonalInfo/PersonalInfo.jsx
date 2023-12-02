import './PersonalInfo.css';

export default function PersonalInfo({
    firstName,
    lastName,
    email,
    imageLink,
}){


    return(
        <div className="personal-info">
            <img src={imageLink} alt={firstName} className="person-img"/>
            <h3 className="text-primary mb-3">{firstName} {lastName}</h3>
            <p>{email}</p>
      </div>
    )
}