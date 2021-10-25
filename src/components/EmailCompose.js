import React from "react";
import '../App.css'

const EmailCompose = (props) => {

    return props.sendingEmail && (
            <form onSubmit={(e) => props.sendMail(e)}>
            <table className="email-table">
                <tbody>
                <tr className="email-header">
                    <td>Recipient</td>
                    <td><input type={"text"} name={"recipient"}/></td>
                </tr>
                <tr className="email-header">
                    <td>Subject</td>
                    <td><input type={"text"} name={"subject"}/></td>
                </tr>
                <tr className="email-row">
                    <td colSpan="2">
                            <textarea cols="100" rows="10" name={"message"}>
                            </textarea>
                    </td>
                </tr>
                <tr className="email-row" align="center">
                    <td colSpan="2" className="email-button">
                        <input type={"submit"} value={"Send Email"} /></td>
                </tr>
                </tbody>


            </table>
            </form>
    )
}

export default EmailCompose;