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

  getImmediateChildren(props.data);
  getTotalChildren(props.data);

  return (
    <div className='card-container'>
    <div className='card'>
    <p className='card-title'>{props.data.team}</p>
    <div className='card-body'>
    <p className='card-name'>{props.data.name}</p>
    <p>{props.data.designation}</p>
    <p>
    <span><i className="fa fa-users"></i>  {immediateChildren} </span>
    <span><i className="fa fa-users"></i>  {totalChildren} </span>
    </p>
    </div>
    </div>
    <div  className='childs'>{props.data.children?props.data.children.map((child)=> <Card key={child.name} data ={child} />):''}</div>
    </div>
  );
}

export default Card;
