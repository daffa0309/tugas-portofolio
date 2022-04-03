import React, { Component } from "react";

class About extends Component {
  render() {
    const style  = {
        paddingTop: "50px",
        paddingLeft: "50px",
        paddingRight: "50px",
    }
    return (
      <div>
          <p style={style}>
        Suspendisse ac dui sagittis, feugiat leo eget, eleifend erat. Praesent
        eu quam mi. Morbi sit amet neque in nibh bibendum rhoncus ac nec dui.
        Mauris felis metus, placerat et neque varius, eleifend mattis mi. Nulla
        in dolor varius, mollis eros in, viverra elit. Pellentesque scelerisque
        ultricies sapien ut scelerisque. Fusce nec est vitae metus vehicula
        fermentum non ac augue. Quisque non justo a sem pulvinar interdum ac
        quis metus. Aliquam suscipit ante vitae velit congue fringilla. Ut sit
        amet erat convallis, gravida quam nec, volutpat nisl. Praesent lacinia
        semper nunc, sit amet finibus enim tincidunt eu. Sed non lorem nec est
        viverra malesuada vitae non metus. Suspendisse sodales urna vel volutpat
        vehicula. Proin placerat tortor ac lorem dictum, sit amet placerat velit
        eleifend. Donec ac velit lorem. In sed ipsum sed felis vulputate tempor.
        </p>
      </div>
    );
  }
}
export default About;
