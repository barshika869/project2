import React, {useState} from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'


export default function SearchBar(){
const [q,setQ] = useState('')
const navigate = useNavigate()


function submit(e){
e.preventDefault()
const params = {q}
navigate({ pathname: '/', search: createSearchParams(params).toString() })
}


return (
<form onSubmit={submit}>
<input className="search-input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." />
</form>
)
}