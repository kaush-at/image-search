import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {span : 0};
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpan);

  }

  setSpan = () =>{
    
       const height = this.imageRef.current.clientHeight;
       const span = Math.ceil(height/10);
       this.setState({span});
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.span}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;