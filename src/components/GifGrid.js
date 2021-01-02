import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {

   const {data: images, loading} = useFecthGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {
                loading && <p className="animate__animated animate__flash">Loading...</p>
            }
            <div className="card-grid">
                {
                    images.map(img =>
                        <GifGriditem
                            key={img.id}
                            {...img}
                        />
                    )
                }

            </div>
        </>
    )
}
