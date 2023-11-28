import React, { useState } from 'react';
const results = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1643713303351-01f540054fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'John Doe',
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1643883135036-98ec2d9e50a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'Chandri Anggara',
  },
  {
    id: '3',
    avatar:
      'https://images.unsplash.com/photo-1578342976795-062a1b744f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'Amin RK',
  },
  {
    id: '4',
    avatar:
      'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'Edward Howell',
  },
  {
    id: '5',
    avatar:
      'https://images.unsplash.com/photo-1578342976795-062a1b744f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'Amin RK',
  },
  {
    id: '6',
    avatar:
      'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    name: 'Edward Howell',
  },
];
const LiveSearchField = ({ director, onChange }) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  const handelOnFocus = () => {
    setDisplaySearch(true);
  };

  const handelOnBlur = () => {
    setDisplaySearch(false);
  };
  return (
    <div className='mt-5 relative'>
      Search Director
      <input
        type='text'
        id='director'
        placeholder='search Actor...'
        value={director}
        name='director'
        onChange={onChange}
        onFocus={handelOnFocus}
        onBlur={handelOnBlur}
        className='w-full outline-none mb-5 p-2 rounded border-b-1 border-dark-subtle focus:border-primary text-primary'
      />
      <SearchResultes visible={displaySearch} />
    </div>
  );
};

export default LiveSearchField;

const SearchResultes = (visible) => {
  if (visible) return null;

  return (
    <div className='absolute right-0 top-16 left-0 p-2 rounded overflow-auto  bg-secondary shadow-md '>
      {results.map(({ id, name, avatar }) => (
        <div
          key={id}
          className='cursur-pointer overflow-hidden rounded hover:bg-dark-subtle transition flex space-x-2'
        >
          <img
            src={avatar}
            alt={name}
            className='h-10 w-10 rounded object-cover'
          />
          <p className='text-white'>{name}</p>
        </div>
      ))}
    </div>
  );
};
