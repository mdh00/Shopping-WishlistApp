'use client'
import React from 'react'
import { useState } from 'react'
import { addItem } from '@/lib/features/shopping-items/itemSlice'
import { useAppDispatch } from '@/lib/hooks'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Button } from '@/app/components/ui/button'
import { useRouter } from 'next/navigation';

const AddItem = () => {
  const dispatch = useAppDispatch()

  const [name, setName] = useState('')
  const [priority, setPriority] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState('')

  const router = useRouter();

  const addItemHandle = (e) => {
    e.preventDefault()

    if (name.trim()) {
      dispatch(addItem({ name, priority, price, quantity }))
    }

    setName('');
    setPriority('');
    setPrice(0);
    setQuantity(1);

    router.push('/shopping-list')
  }

  return (
    <><h1 className='flex justify-center items-center font-bold text-xl'>Add Shopping Item to your wishlist</h1>
      <div className='flex justify-center items-center'>

        <form className="w-1/3 py-8 flex flex-col gap-y-8" onSubmit={addItemHandle}>
          
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Item Name"
            />

            <Label>Priority</Label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
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
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />

            <Label>Quantity (pcs/Kg/g)</Label>
            <Input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter Quantity"
            />
            <Button className="mt-6">Submit</Button>
           
        </form>
       

      

    </div ></>
  )
}

export default AddItem