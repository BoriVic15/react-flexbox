import React from 'react'

function List() {
  return (
    <div>
        <h2>List of names</h2>
        {listitems.map((item)=> (
        <h1 key={item.id}>{item.name}</h1>
        ))}
    </div>
  )
}

export default List

const list =[
   "victor","jacob","toyosi","gbenga","felix"
]

const listitems=[
  {id:1,name:"tola",age:20,color:'red'},
  {id:2,name:"jacob",age:24,color:'Orange'},
  {id:3,name:"kunle",age:21,color:'grey'},
  {id:4,name:"toyosi",age:20,color:'blue'},
  {id:5,name:"felix",age:26,color:'violet'}
]