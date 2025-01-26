import { Button } from '@/components/ui/button';
import React, { FC } from 'react';

interface ItemProps {
    label: string;
    key: string;
    href: string;
}

interface NavDesktopProps {
    items: ItemProps[]; 
}

const NavDesktop: FC<NavDesktopProps> = ({ items }) => {
    return (
            <nav className='flex w-full justify-between items-center'>
                <ul className='flex gap-5'>
                    {items.map((item) => (
                        <li key={item.key} className='text-sm'>
                            <a className='text-sm' href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2'>
                    <Button className='text-xs' size={"sm"}>Đăng nhập</Button>
                </div>
            </nav>
    );
};

export default NavDesktop;
