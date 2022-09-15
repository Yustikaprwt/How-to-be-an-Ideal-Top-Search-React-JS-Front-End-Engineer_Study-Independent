import React from "react";

class mockData extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("unmount",this.props.title);
  }

  render() {
    if(this.props.mockData.isRemove)
    return <s>
      {this.props.mockData.title}</s>;
    else
    return this.props.mockData.title;
  }
}

export default mockData;