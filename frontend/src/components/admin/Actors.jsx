import React, { useState, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { getLatestActors } from '../../api/actor';

const Actors = () => {
  const [showHide, setShowHide] = useState(false);
  const [actors, setActors] = useState([]);
  let limit = 5;
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    const actors = async () => {
      const { data } = await getLatestActors(pageNo, limit);
      setActors(data?.data);
    };

    actors();
  }, [pageNo]);

  return (
    <div>
      <div className='grid grid-cols-3 '>
        {actors.map((actor) => (
          <div
            key={actor?.id}
            onMouseEnter={() => {
              setShowHide(true);
            }}
            onMouseLeave={() => {
              setShowHide(false);
            }}
            className='flex relative bg-secondary border rounded p-2  cursor-pointer m-2'
          >
            <img
              className='w-10 h-auto object-cover  aspect-square'
              src={`${actor?.avatar?.url}`}
              alt=' actor image'
            />

            <div className='flex flex-col ml-5 '>
              <h1 className='font-extrabold'>{actor?.name}</h1>
              <p style={{ fontSize: '0.6rem' }}>{actor?.about}</p>
            </div>
            {showHide && (
              <div className='absolute inset-0 bg-primary bg-opacity-25  backdrop-blur-sm space-x-6 flex items-center justify-center '>
                <button
                  onClick={() => {
                    console.log('button clicked!');
                  }}
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => {
                    console.log('button clicked!');
                  }}
                >
                  <AiFillEdit />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-5 space-x-5'>
        <button
          onClick={() => {
            if (pageNo === 0) {
              return;
            }
            setPageNo((pageNo - 1));
          }}
        >
          pre
        </button>
        <button
          onClick={() => {
            setPageNo((pageNo + 1));

            console.log(pageNo);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Actors;
