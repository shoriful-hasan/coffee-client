import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffecard from './component/Coffecard'
import { useState } from 'react'

function App() {

const coffeedata = useLoaderData()
const [coffees,setcoffees] = useState(coffeedata)

return (
<>
<h2 className='text-4xl text-center bg-yellow-700'>Coffee card all{coffeedata.length}</h2>
<div className='max-w-screen-lg mx-auto grid grid-cols-3 gap-2'>
{
  coffees.map(coffee =>
  <Coffecard 
  key={coffee._id} 
  coffee={coffee} 
  coffees={coffees}
  setcoffees ={setcoffees}
  
  ></Coffecard>)
}

</div>


</>
  )
}

export default App
