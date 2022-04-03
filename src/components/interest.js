import React, { Component } from "react";

class Interest extends Component {
  render() {
    const style = {
      paddingTop: "50px",
      paddingLeft: "50px",
      paddingRight: "50px",
    };
    return (
      <div>
        <p style={style}>
          Do you get the feeling that there are more twins around these days
          than there used to be? No? Well, you should, because according to a
          new study in the journal Human Reproduction, the "twinning rate" has
          increased by one-third since the '80s—up from 9 to 12 twins per 1,000
          deliveries. Currently that adds up to about 1.6 million twins born
          each year across the world—meaning one out of every 42 babies is a
          twin. Helping drive this is the increasing use of medically assisted
          reproduction, and the delay in childbearing (twinning has been found
          to increase with a mother's age). For more pieces of trivia to impress
          your friends, here are 50 Facts So Strange You Won't Believe They're
          True.
        </p>
      </div>
    );
  }
}
export default Interest;
