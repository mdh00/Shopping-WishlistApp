
import React from 'react'
import ShoppingList from './components/ShoppingList'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"


const ShoppingListPage = () => {
  return (
    <>
      <div className='p-5'>
        <Link href="shopping-list/add-item">
          <Button size="lg" variant="secondary">Add new item</Button>
        </Link>
        <div className='flex justify-end items-end'>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Sort By</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className='border-b-2 border-gray-200'>
                <button>Priority</button>
              </div>
              <div className='border-b-2 border-gray-200'>
                <button>Price</button>
              </div>
              <div className='border-b-2 border-gray-200'>
                <button>Status</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <ShoppingList />

    </>
  )
}

export default ShoppingListPage