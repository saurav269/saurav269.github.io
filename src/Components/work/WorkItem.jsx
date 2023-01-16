import React from 'react'

const WorkItem = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt=''/>
      <h3 >{item.title}</h3>
    </div>
  )
}

export default WorkItem
