import React from "react";
import '../App.css';

const Email = (props) => {


    return(
        <div>
            <table className="email-table">
                <tbody>
                    <tr className="email-header">
                        <th>Sender</th>
                        <th>Subject</th>
                    </tr>
                    <tr className="email-row">
                        <td><span className="item">{props.selectedEmail.sender}
                        -  Received: {props.selectedEmail.date}</span></td>
                        <td><span className="item">{props.selectedEmail.subject}</span></td>
                    </tr>
                    <tr className="email-row">
                        <td colSpan="2">
                            <textarea readOnly={true} cols="100" rows="10" value={props.selectedEmail.message}>
                            </textarea>
                        </td>
                    </tr>
                    <tr className="email-row" align="center">
                        <td colSpan="2" className="email-button">
                            <button type="button" onClick={() => props.displayMailBox()}>Go Back to Mailbox</button></td>
                    </tr>
                </tbody>


            </table>


        </div>

    )
}

export default Email;