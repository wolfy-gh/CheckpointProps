import React from 'react'
import propTypes from 'prop-types'
import './Profil.css'

function Profil({fullName,bio,profession,children,handleClick}) {
    const styleProfil = {   display:'grid',
                            gridTemplateColumns:'40% 60%',
                            backgroundColor:'white',
                            color:'black',
                            borderRadius:"10px",
                            margin :"0 30%",
                            padding:"15px 0"
                        }
    // function handleName(e){
    //     e.preventDefault()
    //     alert("Hello "+props.fullName)
    // }
    return ( 
        <div style={styleProfil}  onLoad={e => handleClick(e)} >
            {children}
            <div className="profil">
                <h4>Full Name : </h4>
                <p>{fullName}</p>
                <h4>Bio :</h4> 
                <p>{bio}</p>
                <h4>Profession :</h4>
                <p>{profession}</p>
            </div>    
        </div>
    )
}
Profil.defaultProps ={
    fullName:"Unknown",
    bio:"Empty",
    profession:"No Profession",
    children: <img src="/images/default.png" alt="profil" />
}
Profil.propTypes={
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    children:propTypes.object
}

export default Profil
