import CardListMobile from '@/components/card-list-mobile'
import DataTable from '@/components/data-table'
import React from 'react'

export type Car = {
  id: string
  name: string
  urlImage: string
  nextAvailableDate: string
  status: 'available' | 'reserved'
  rating: 1 | 2 | 3 | 4 | 5
}

const data: Car[] = [
  {
    id: '1',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 4,
  },
  {
    id: '2',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 3,
  },
  {
    id: '3',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 5,
  },
  {
    id: '4',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'reserved',
    rating: 2,
  },
  {
    id: '5',
    name: 'Dolphin-56',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 1,
  },
  {
    id: '6',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 5,
  },
  {
    id: '7',
    name: 'kk-56',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'reserved',
    rating: 4,
  },
  {
    id: '8',
    name: 'zbt6',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 3,
  },
  {
    id: '9',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'available',
    rating: 2,
  },
  {
    id: '10',
    name: 'Hb20',
    urlImage: '/Hb20.webp',
    nextAvailableDate: '11/07', 
    status: 'reserved',
    rating: 1,
  },
]

const IndexPage = () => {
  return (
    <main className=" container flex h-full flex-col items-center justify-center">
      <CardListMobile carList={data} />
      <DataTable data={data} />
    </main>
  )
}

export default IndexPage
