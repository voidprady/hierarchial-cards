import React from 'react';

const Card = (props) => {
  let immediateChildren = 0;
  let totalChildren = 0;
  let childCards = '';
  const getImmediateChildren = (root) => {
    if(root.children && Array.isArray(root.children)){
      immediateChildren =  root.children.length;
    }
  }

  const getTotalChildren = (root) => {
    if(root.children && Array.isArray(root.children)){
      totalChildren += root.children.length;
      root.children.forEach((child) => {
        getTotalChildren(child);
      })
    }
  }

  const getCardPosition = () => {
    let parentCard = document.getElementById(props.data.eid);
    console.log(parentCard);
    // let centerX = parentCard.offsetLeft + parentCard.offsetWidth / 2;
    // let centerY = parentCard.offsetTop + parentCard.offsetHeight;
    // console.log(centerX, centerY);
  }

  getImmediateChildren(props.data);
  getTotalChildren(props.data);
  getCardPosition();

  return (
    <div className='card-container'>
      <div className='card' id={props.data.eid}>
        <p className='card-title'>{props.data.team}</p>
        <div className='card-body'>
          <div className='card-main'>
            <p>{props.data.name}</p>
            <p>{props.data.designation}</p>
          </div>
          <hr/>
          <div className='card-sub'>
            <span><i className="fa fa-sitemap"></i><p>{immediateChildren}</p></span><span><i className="fa fa-user"></i><p>{totalChildren}</p></span>
          </div>
          <hr/>
        </div>
      </div>
      <svg width='20px' height='20px'>
      <path d='m15 0 l0 15' stroke='black' strokeWidth='2'/>
      </svg>
      <div  className='childs' id={props.data.eid+'-childs'}>{props.data.children?props.data.children.map((child)=> <Card key={child.name} data ={child} />):''}</div>
    </div>
  );
}

export default Card;
