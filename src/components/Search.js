import React, {useState} from 'react'

const Search = ({query}) => {
    const[text, setText] = useState('')
    const onChange = (q) =>{
        setText(q)
        query(q)
    } 
  return (
    <section className='searc'>

        <form >
            <input className='form-control' placeholder='Search' value={text}
            onChange={(e) => onChange(e.target.value)} autoFocus />

        </form>
    </section>
  )
}

export default Search