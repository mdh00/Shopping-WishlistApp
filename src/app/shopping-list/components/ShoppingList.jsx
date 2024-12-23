'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import ItemCard from '@/app/components/ui/shared/item-card'
import { removeItem } from '@/lib/features/shopping-items/itemSlice'
import { useRouter } from 'next/navigation'

const ShoppingList = () => {
  const items = useAppSelector((state) => state.items.items)
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  const handleUpdateItem = (item) => {
    const queryParams = new URLSearchParams({
      id: item.id,
      name: item.name,
      priority: item.priority,
      price: item.price,
      quantity: item.quantity,
    }).toString();

    router.push(`/shopping-list/update-item?${queryParams}`);
  };

  
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full mx-auto">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={() => handleRemoveItem(item.id)}
          onUpdate={() => router.push(`/shopping-list/update-item/${item.id}`)}
        />
      ))}

    </div>
  )
}

export default ShoppingList