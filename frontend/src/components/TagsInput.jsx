import React, { useState, useEffect } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';


 

const TagsInput = ({name,onChange}) => {

    const [tag , setTag]=useState('');
    const [tags, setTags]= useState([]);

    const onChangeHandeller= (event)=>{
        if(event.target.value!==',')
        setTag(event.target.value);
        onChange([...tags,tag])
    }

 const onKeyDownHandeller= ({key})=>{
   if(key==='Enter' || key===','){
    if(tag.includes()) return setTag('');
    if(!tag) return;

    setTags([...tags, tag]);
    setTag('');
   onChange(tags)
   
   }
   if(key==='Backspace' && tags.length && !tag){
     const newTags=tags.filter((_, index)=>
        index!==tags.length-1
    )

    setTags([...newTags]);
    onChange(newTags)
   }
 }

 const onRemoveTag =(t)=>{
    const newTags= tags.filter(tag=>(
        tag!==t
    ))
    setTags([...newTags]);
    onchange(newTags)
 }
 
       

  return (
    <div onKeyDown={onKeyDownHandeller} className='bg-white border-2 px-2 h-10 w-full rounded flex items-center gap-2 text-white'>
      {tags.map((t,index)=>(
        <Tag key={index} onClick={()=>onRemoveTag(t)}>{t}</Tag>
      ))}
      <input type='text' className='rounded flex-grow text-black p-1  w-6' value={tag} onChange={onChangeHandeller} />
    </div>
  );
};

export default TagsInput;

const Tag = ({ children, onClick }) => {
  return (
    <span className=' bg-secondary rounded p-1 flex items-center gap-1'>
      {' '}
      {children}
      <AiOutlineDelete onClick={onClick} />
    </span>
  );
};
