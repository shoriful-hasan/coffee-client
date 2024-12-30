import React from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffecard = ({coffee,coffees,setcoffees}) => {

const {name,chef,supplier,taste,category,details,photo,_id} = coffee

const handledelete = (_id)=>{
    console.log(_id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
fetch(`http://localhost:5000/coffeeAll/${_id}`,{
  method : 'DELETE'  
})
.then(res => res.json())
.then(data => {
    console.log(data);
    
    if (data.deletedCount > 0) {
           Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          })

const remaining = coffees.filter(cof => cof._id !== _id)
setcoffees(remaining)
          console.log('the data deleted successfully',data);
    }
})


        }
      });

    
}

    return (
        <div>
           <div className="max-w-sm p-4 bg-gray-300 rounded-lg shadow-md flex items-center">
      {/* Image */}
      <div className="w-1/3">
        <img
          src={photo&& photo}
          alt="Coffee Cup"
          className="rounded"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 pl-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{chef}</p>
        <p className="text-sm font-bold text-gray-800">{details}</p>
        <div className="mt-3 flex space-x-2">
          {/* Action Buttons */}
          <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          <FaEye />

          </button>
          <button  className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
       <Link to={`/updatecoffee/${_id}`}><FaEdit></FaEdit></Link>
          </button>
          <button onClick={() => handledelete(_id)} className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
          <MdDelete />
          </button>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Coffecard;