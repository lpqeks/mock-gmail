import React from "react";
import axios from "axios";
import Emails from "./components/Emails";
import Email from "./components/Email";
import EmailCompose from "./components/EmailCompose";


class App extends React.Component {
    constructor(props) {
        super(props);

        //Define and initialize states
        this.state = {
            emails : [],
            emailsCopy : [],
            selectedEmail : {},
            detailedView : false,
            sendingEmail : false,
            searchEmail : ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/emails')
                .then(response => {
                    this.setState({
                        emails : response.data,
                        emailsCopy : response.data
                    })
                })
                .catch(error => console.log(error));
    }

    //Change state when user clicks single email
    viewSingleEmail = (email) => {
        this.setState({detailedView : true})
        this.setState({selectedEmail: email});
    }

    //Change state to display list of emails
    displayMailBox = () => {
        this.setState({detailedView : false})
        this.setState({selectedEmail: {}});
    }

    //change status when composing email
    changeSendMailStatus = () => {
        this.setState({sendingEmail : true});
    }

    //send email
    sendMail = (e) => {
        e.preventDefault();
        const newEmail = {
            sender: "carlos@mail.com",
            recipient: e.target.recipient.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        axios.post("http://localhost:3001/send", newEmail)
                .then(() => {
                    axios.get("http://localhost:3001/emails")
                            .then(response => {
                                this.setState({emails : response.data})
                                this.setState({emailsCopy : response.data})
                            })
                })

        this.setState({sendingEmail : false})

    }

    //Search for emails based on subject.  Uses setState callback function method to ensure
    //state was updated before conducting a search since setState is an asynchronous method.
    searchBox = (e) => {
        this.setState({searchEmail : e.target.value}, () => {

        if (this.state.searchEmail) {
            this.setState({emailsCopy : this.state.emails.filter(email => {
                return email.subject.includes(this.state.searchEmail)})})
        } else {
            this.setState({emailsCopy : this.state.emails})
        }
        });

    }


    render() {
        return(
               <div>
                   {this.state.sendingEmail ?
                           <EmailCompose sendMail={this.sendMail} sendingEmail={this.state.sendingEmail} />
                           : this.state.detailedView
                                       ? <Email selectedEmail={this.state.selectedEmail}
                                                displayMailBox={this.displayMailBox}/>
                                       : <Emails emailsCopy={this.state.emailsCopy} viewSingleEmail={this.viewSingleEmail}
                                                 changeSendMailStatus={this.changeSendMailStatus}
                                                 searchEmail={this.state.searchEmail}
                                                 searchBox={this.searchBox}
                                   />

                   }

             </div>
        );
    }
}

export default App;