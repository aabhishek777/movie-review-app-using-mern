import React, { useState } from 'react';
import TagsInput from '../TagsInput';
import LiveSearchField from '../LiveSearchField';
import { FiLogIn } from 'react-icons/fi';

const defaultMovieInfo = {
  title: '',
  storyLine: '',
  tags: [],
  cast: [],// cast-- [{actorId:'',roleAs:"", leadActor:true}]
  director: {},
  writers: [],
  releaseDate: '',
  poster: null,
  genres: [],
  type: '',
  language: '',
  status: '',
};
const MovieForm = () => {
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    storyLine: '',
    tags: [],
    cast: [],
    director: {},
    writers: [],
    releaseDate: '',
    poster: null,
    genres: [],
    type: '',
    language: '',
    status: '',
  });
  const onSubmitHandeller = (event) => {
    event.preventDefault();
  };

  const handelOnchange = ({ target }) => {
    const { name, value } = target;

    setMovieInfo({ ...movieInfo, [name]: value });
    console.log(movieInfo);
  };

  const updateTags = (tags) => {
    setMovieInfo({ ...movieInfo, tags });
    console.log(movieInfo);
  };

  const [dir, setDir]= useState('');

  const handelDirector = ({ target }) => {
    const directorName = target.value;
    
   
    if (directorName) {
      setMovieInfo((prevMovieInfo) => ({
        ...prevMovieInfo,
        director: [
          ...prevMovieInfo.director,
         directorName,
        ],
      }));
    }
    

    setDir('');
  
    console.log(movieInfo); // This will show the updated movieInfo with the director value added.
  };
  

  const { title, storyLine, director } = movieInfo;
  return (
    <form
      onSubmit={onSubmitHandeller}
      className='flex mt-10 space-x-10  space-y-10'
    >
      <div className=' w-[70%] h-10'>
        <label htmlFor='title' className='font-semibold text-dark-subtle'>
          Title
        </label>
        <input
          onChange={handelOnchange}
          value={title}
          type='text'
          id='title'
          placeholder='title'
          name='title'
          className='w-full outline-none mb-5 border-b-2 rounded p-2  
            border-dark-subtle focus:border-primary text-primary  '
        />
        <label htmlFor='storyLine' className='font-semibold text-dark-subtle'>
          Story Line
        </label>
        <textarea
          onChange={handelOnchange}
          value={storyLine}
          type='text'
          id='storyLine'
          placeholder='story Line'
          name='storyLine'
          cols='30'
          rows='10'
          className='w-full outline-none mb-5 p-2 rounded border-b-2
           border-dark-subtle focus:border-primary text-primary'
        ></textarea>
        <br />
        Input Tags
        <TagsInput onChange={updateTags} />
        <LiveSearchField onChange={handelOnchange} director={director} />
        <label htmlFor='writers'>Writers</label>
    

        <input
    onChange={handelDirector}
    value={dir}
    type='text'
    id='director'
    placeholder='directors'
    name='director'
    className='w-full outline-none mb-5 border-b-2 rounded p-2  
      border-dark-subtle focus:border-primary text-primary  '
  />



      </div>
      <div className=' w-[30%] h-10'>gjhwgsuygsg</div>
    </form>
  );
};

export default MovieForm;


