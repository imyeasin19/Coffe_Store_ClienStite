import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, photo, price, details, taste } = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        // send updated coffee to db
        fetch(`https://coffee-store-server-omega-fawn.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='p-24 bg-[#F4F3F0]'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-4xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {/* Coffee Name */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    {/* Quantity */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter coffee quantity" />
                    </fieldset>
                    {/* Supplier */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* Taste */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* Price */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price per cup" />
                    </fieldset>
                    {/* Details */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* Photo URL */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label text-lg font-semibold">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full bg-[#D2B48C]' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;