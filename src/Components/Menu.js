import React from 'react'
import { MenuList } from "../Helpers/MenuList"
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Menu Items</h1>
            <div className='menuList'>
                {MenuList.map((item, key) => {
                    return (
                        
                            <MenuItem
                              key={key}
                              image={item.image}
                              name={item.name}
                              price={item.price}
                            />
                    )
                })}
            </div>

        </div>
    )
}

export default Menu