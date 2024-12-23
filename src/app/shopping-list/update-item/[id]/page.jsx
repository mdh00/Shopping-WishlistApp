'use client'
import React, { useState} from 'react'
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import { useParams } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks'
import { updateItem } from '@/lib/features/shopping-items/itemSlice'
import { useAppDispatch } from '@/lib/hooks' 
import { useRouter } from 'next/navigation';

const UpdateItem = () => {
    const { id } = useParams();
    const items = useAppSelector((state) => state.items.items)
    const existingItem = items.find(f => f.id == id);

    if (!existingItem) {
        console.error(`Item with id ${id} not found`);
        return <div>Item not found</div>;
    }

    const { name, priority, price, quantity } = existingItem;
    const [newname, setName] = useState(name)
    const [newpriority, setPriority] = useState(priority)
    const [newprice, setPrice] = useState(price)
    const [newquantity, setQuantity] = useState(quantity)

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateItem({
            id: id,
            name: newname,
            priority: newpriority,
            price: newprice,
            quantity: newquantity,
        }));
        router.push('/shopping-list');
    }

    return (
        <><h1 className='flex justify-center items-center font-bold text-xl'>Update Shopping Item of your wishlist</h1>
            <div className='flex justify-center items-center'>

                <form className="w-1/3 py-8 flex flex-col gap-y-8" onSubmit={handleUpdate}>

                    <Label>Name</Label>
                    <Input
                        type="text"
                        placeholder="Enter Item Name"
                        value={newname}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Label>Priority</Label>
                    <select
                        value={newpriority}
                        className="border border-gray-300 rounded px-3 py-2"
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="" disabled className='text-gray-400'>
                            Select Priority
                        </option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <Label>Price</Label>
                    <Input
                        value={newprice}
                        type="number"
                        placeholder="Enter Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <Label>Quantity (pcs/Kg/g)</Label>
                    <Input
                        value={newquantity}
                        type="text"
                        placeholder="Enter Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Button className="mt-6">Update</Button>

                </form>




            </div ></>
    )
}

export default UpdateItem