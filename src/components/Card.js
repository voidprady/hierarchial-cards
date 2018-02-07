import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.immediateChildren = 0;
    this.totalChildren = 0;
    this.childCards = '';
    this.state = {
      "startX" : 0,
      "startY" : 0,
      "endX" : 0,
      "endY" : 0
    }
    this.getImmediateChildren(this.props.data);
    this.getTotalChildren(this.props.data);
  }


  componentDidMount() {
    const endEl = document.getElementById(this.props.data.eid+'-childs');

    if(endEl){
      const d2 = endEl.getBoundingClientRect();
      const startEl = document.getElementById(this.props.data.eid);
      const d1 = startEl.getBoundingClientRect();
      // console.log(d1.y,d1.height, d2.y);
      this.setState({
        startX : d1.x + (d1.width/2) - dd.x,
        startY : d1.y + d1.height - dd.y,
        endX : d2.x + (d2.width/2),
        endY : d2.y
      });
    }

  }

  getImmediateChildren = root => {
    if (root.children && Array.isArray(root.children)) {
      this.immediateChildren = root.children.length;
    }
  };

  getTotalChildren(root) {
    if (root.children && Array.isArray(root.children)) {
      this.totalChildren += root.children.length;
      root.children.forEach(child => {
        this.getTotalChildren.call(this, child);
      });
    }
  }

  drawLines() {
    return (
      <svg id={this.props.data.eid+'-lines'}width='15px' height='15px'>
        <path d={'M'+this.state.startX+' '+this.state.startY+ 'L'+this.state.endX+' '+this.state.endY} stroke="orange" strokeWidth="2"/>
      </svg>
    )
  }

  render() {
    const props = this.props;

    return (
      <div className="card-container">
        <div className="card" id={props.data.eid}>
          <p className="card-title">{props.data.team}</p>
          <div className="card-body">
            <div className="card-main">
              <p>{props.data.name}</p>
              <p>{props.data.designation}</p>
            </div>
            <hr />
            <div className="card-sub">
              <span>
                <i className="fa fa-sitemap" />
                <p>{this.immediateChildren}</p>
              </span>
              <span>
                <i className="fa fa-user" />
                <p>{this.totalChildren}</p>
              </span>
            </div>
            <hr />
            {props.data.children?<p><i className='fa fa-plus-circle'></i></p>:''}
          </div>
        </div>
        {props.data.children?this.drawLines():''}
        <div className={props.data.collapse?"childs collapsed":"childs active"} id={props.data.eid + '-childs'}>
          {props.data.children? props.data.children.map(child => <Card key={child.name} data={child} />): ''}
        </div>
      </div>
    );
  }
}

export default Card;
