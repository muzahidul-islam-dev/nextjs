"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function MealSearchInput() {
    // const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();



    useEffect(() => {
        const searchQuery = {search};
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParam}`
        router.push(url)
    }, [search])

    return <input type="text" className='text-white border-white border' value={search}
                onChange={(e) => setSearch(e.target.value)} />
}

export default MealSearchInput
