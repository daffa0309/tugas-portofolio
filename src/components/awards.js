import React, { Component } from "react";

class Awards extends Component {
  render() {
    const style = {
      paddingTop: "50px",
      paddingLeft: "50px",
      paddingRight: "50px",
    };
    return (
      <div>
        <p style={style}>
          According to a text spam settlement announced by the FTC, two groups
          of companies known as SubscriberBASE Holdings, Inc., and Threadpoint,
          LLC, hired spammers to send millions of unsolicited texts to lure
          people to websites where they would get “free” gift cards. When people
          clicked on the links, they were led to bogus websites to register for
          the prizes. Registration required them to sign up for several
          third-party offers where they had to reveal personal information. At
          the end, no one actually got the gift cards that were promised. The
          whole operation was designed to allow these companies to collect
          people’s personal information and make money by selling it to
          third-parties.
        </p>
      </div>
    );
  }
}
export default Awards;
