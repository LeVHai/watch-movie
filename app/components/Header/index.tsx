'use client'
import React from 'react'
import NavDesktop from './NavDesktop'
import { Input } from '@/components/ui/input'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function Header() {
    const { width } = useWindowDimensions()
    const menuItem = [
        {
            key: 'phim-bo',
            label: "Phim bộ",
            href: ''
        },
        {
            key: 'phim-le',
            label: "Phim lẻ",
            href: ''
        },
        {
            key: 'hoat-hinh',
            label: "Hoat hình",
            href: ''
        },
        {
            key: 'tv-show',
            label: "TV Shows",
            href: ''
        },
        {
            key: 'the-loai',
            label: "Thể loại",
            href: ''
        },
        {
            key: 'quoc-gia',
            label: "Quốc gia",
            href: ''
        },
    ]
    const isMobile = width < 960
    return (
        <div className='fixed  left-0 top-0 z-50 w-full flex  items-center h-[60px] px-4 bg-inherit gap-5'>
            <div >NghienPhim</div>
            <div className='flex-grow lg:min-w-[200px]'>
                <Input placeholder='Tìm kiếm phim ...'
                    className='w-full text-sm rounded-full' />
            </div>
            {
                isMobile ? <div>m</div> : <NavDesktop items={menuItem} />
            }

        </div>
    )
}
