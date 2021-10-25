
import '../App.css';
import React from "react";

const Emails = (props) => {

    return(
            <div>
                <table className="email-table">
                    <tbody>
                    <tr className="email-controls">
                        <th>Search: <span><input type="text" onChange={(e) => {props.searchBox(e)}} value={props.searchEmail} /></span></th>
                        <th><span><button type="button" onClick={() => props.changeSendMailStatus()}>Compose Email</button></span></th>
                    </tr>
                    <tr className="email-header">
                        <th>Sender</th>
                        <th>Subject</th>
                    </tr>


                {props.emailsCopy.map(email => {
                    return (
                            <tr key={email.id} onClick={() => props.viewSingleEmail(email)} className="email-row">
                                <td><span className="item">{email.sender}</span></td>
                                <td><span className="item">{email.subject}</span></td>
                            </tr>
                 )
                })}
                    </tbody>
                </table>
            </div>
    )


}

export default Emails;