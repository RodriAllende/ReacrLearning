import { useState } from "react"
import"./index.css"
export function TwitterFollowCard ({children ,userName}){


const[isFollowing,setIsFollowing]=useState (true)   
const text= isFollowing? "Siguiendo" : "Seguir"
const buttonClaseName= isFollowing
? "tw-followCard-button is-following" 
: "tw-followCard-button"
const handleClick= ()=>
setIsFollowing (!isFollowing)

    return(
<article className="tw-followCard">

        <header className="tw-followCard-header">
            <img  className="tw-followCard-avatar" 
            src={`https://unavatar.io/${userName} `}/>

            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName" >@{userName}</span>

            </div> 
        </header>
        <aside>
            <button className={buttonClaseName}  onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>       
                <span className="tw-followCard-stopFollow">  Deja de seguir </span>       
                 </button>
        </aside>


    </article> 
    )}