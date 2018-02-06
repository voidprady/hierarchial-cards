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
    <div id={props.data.eid}>
    <div className='card'>
    <h4 className='card-header'>{props.data.team}</h4>
    <div className='card-body'>
    <p>{props.data.name}</p>
    <span><i className="fa fa-users"></i>  {immediateChildren} </span>
    <span><i className="fa fa-users"></i>  {totalChildren} </span>
    </div>
    </div>
    <div  className='childs'>{props.data.children?props.data.children.map((child)=> <Card key={child.name} data ={child} />):''}</div>
    </div>
  );
}

export default Card;
