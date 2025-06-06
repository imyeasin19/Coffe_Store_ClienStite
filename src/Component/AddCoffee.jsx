import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData);
        console.log(coffeeData);

        // send data to the server
        fetch('https://coffee-store-server-omega-fawn.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('after adding coffee to db', data)
                    Swal.fire({
                        title: "Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className='p-24 bg-[#F4F3F0]'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-4xl">Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {/* Coffee Name */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    {/* Quantity */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Enter coffee quantity" />
                    </fieldset>
                    {/* Supplier */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* Taste */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* Price */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price per cup" />
                    </fieldset>
                    {/* Details */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-lg font-semibold">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* Photo URL */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label text-lg font-semibold">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full bg-[#D2B48C]' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;