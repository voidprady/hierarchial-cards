import React from 'react';

const Card = (props) => {
  let immediateChildren = 0;
  let totalChildren = 0;

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

  getImmediateChildren(props.data);
  getTotalChildren(props.data);

  return (
    <div className='card'>
    <h4 className='card-header'>{props.data.team}</h4>
    <div className='card-body'>
    <p>{props.data.name}</p>
    <span>{immediateChildren}</span>
    <span>{totalChildren}</span>
    </div>
    </div>
  );
}

export default Card;
