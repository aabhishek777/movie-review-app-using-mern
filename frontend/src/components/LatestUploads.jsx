import React from 'react';


const movie={
  title:'title',
  subtitle:'subtitle',
  poster:'https://images.unsplash.com/photo-1670773658685-2cc76359df92?auto=format&fit=crop&q=80&w=2112&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  genere:['horror','mystrey']
}


const LatestUploads = () => {
  return (
    <div className=' col-span-2 flex flex-col items-center bg-dark-subtle rounded text-black p-2'>
      
      <MovieListItem movie={movie}/>
     
    </div>
  );
};

export default LatestUploads;


const MovieListItem = ({ movie }) => {
  const { title, poster, genere, subtitle } = movie;
  return (
    <table className='w-full border-b'>
      <tbody>
        <tr>
          <td>
            <h1 className='mb-3'>Latest uploads</h1>
            <img src={poster} className='w-24 aspect-video' alt='' />
          </td>
          <td><div className='font-extrabold'>{title}</div></td>
          <td><div className='font-extrabold'>{subtitle}</div></td>
          <td><div className='font-extrabold'>{genere.join(', ')}</div></td>
        </tr>
      </tbody>
    </table>
  );
};

