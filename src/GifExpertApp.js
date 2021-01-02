import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Naruto', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = (value) => setCategories([...categories, value]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }> Agregar </button> */}

            <ol>
                { 
                    categories.map((cat, i) => 
                    <GifGrid 
                        key= { cat }
                        category={ cat }
                    />)
                }
            </ol>
        </>
    );
}

export default GifExpertApp;