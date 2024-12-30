import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2'
const Addcoffee = () => {
const handlesubmit = (e) =>{
  e.preventDefault()
const form = e.target;
const name = form.name.value;
const chef = form.chef.value;
const supplier = form.supplier.value;
const taste = form.taste.value;
const category = form.category.value;
const details = form.details.value;
const photo   = form.photo.value;
const userdata = {
  name,chef,supplier,taste,category,details,photo
}
  console.log('my name is sh',userdata);
  

// send data to the backend using url this called rest api

fetch('http://localhost:5000/coffee',{
  method : 'POST',
  headers : {'content-type': 'application/json'},
  body : JSON.stringify(userdata)

})
  .then(res => res.json())
   .then(data => { console.log(data)
  
  if(data.insertedId)
    {
      Swal.fire({
        title: 'Success!',
        text: 'User added successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  
  }  
  )

   

}


    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl p-8 bg-gray-300 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Add New Coffee</h1>
          <p className="text-center text-gray-500 mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
            </div>
            {/* Chef */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Chef</label>
              <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full" />
            </div>
            {/* Supplier */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier</label>
              <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
            </div>
            {/* Taste */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Taste</label>
              <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
            </div>
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
            </div>
            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Details</label>
              <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
            </div>
            {/* Photo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Photo</label>
              <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" />
            </div>
            {/* Button */}
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="btn btn-primary px-8">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Addcoffee;