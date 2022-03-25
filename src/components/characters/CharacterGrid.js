import React from 'react'
import CharatcerItems from './CharatcerItems'
const CharacterGrid = ({items}) => {
  return (
    <div>
        <section className='cards'>
        {items.map(item =>(
    <CharatcerItems key={item.char_id}  item={item}></CharatcerItems>
) )}
        </section>


    </div>
  )
}

export default CharacterGrid