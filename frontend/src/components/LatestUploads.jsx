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
     <tbody className='flex h-20 m-5'>
     <tr className='mr-5'>
      <td>
        <img src={poster} className=' aspect-video' alt='' />
      </td>
    </tr>
    <tr className='flex flex-col mr-3'>
      <td className='font-bold'>Title</td>
      <td colSpan="3"><div className=''>{title}</div></td>
    </tr>
    <tr className='flex flex-col mr-3'>
      <td className='font-bold'>Subtitle</td>
      <td colSpan="5"><div className=''>{subtitle}</div></td>
    </tr>
    <tr className='flex flex-col mr-3'>
      <td className='font-bold'>Genere</td>
      <td colSpan="3"><div >{genere.join(', ')}</div></td>
    </tr>
    </tbody>
  </table>

  );
};

