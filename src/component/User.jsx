import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { data, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
    const userdata = useLoaderData();

    const [user,setuser] = useState(userdata);

const handledelete = (id)=>{
console.log(id);




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
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });

    fetch(`http://localhost:5000/alluseremail/${id}`,{
      method : 'DELETE'
    })
    .then(res=> res.json())
    .then(data => {
console.log(data);
if(data.deletedCount > 0){
  Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });


const remaining = user.filter(us => us._id !== id)
setuser(remaining)
}



    })


  }
});




}

    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='text-center'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
    
        <th>Name</th>
        <th>Email</th>
        <th>Created Date</th>
        
      </tr>
    </thead>
    <tbody>
    {
        user.map(use => 
            <tr key={use._id}>
       
            <td>{use.name}</td>
            <td>{use.email}</td>
            <td>{use.cratedat}</td>
            <td>
              <button onClick={()=> handledelete(use._id)} className='btn'><MdDeleteOutline></MdDeleteOutline></button>
              <button className='btn'><FaEdit></FaEdit></button>
              <button className='btn'><GrView></GrView></button>
            </td>
            
          </tr>
        )
    }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default User;