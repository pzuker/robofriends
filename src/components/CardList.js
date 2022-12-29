import React from 'react'
import Card from "./Card"

function CardList({robots}) {
  return (
    <div>
      {robots.map((robot, index)=> {return <Card key={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}  username={robots[index].username}/>})}
    </div>
  )
}

export default CardList
