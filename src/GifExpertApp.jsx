import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategoty = ( newCategory ) => {
        //console.log(newCategory);
        //categories.push(newCategory);
        if ( categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
        //setCategories(cat => [...cat, 'Valorant']);
    }



  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        < AddCategory 
           //setcategories={ setCategories }
            onNewCategory={event => onAddCategoty(event) }
        />

        {/* Listados de Gif */}
        {/* <button onClick={ onAddCategoty }>Agregar</button> */}
      
        { 
          categories.map( category => (
            <GifGrid 
                    key={ category } 
                    category={ category } 
              />
          ) ) 
        }

            {/* <li>XYZ</li> */}
      

         {/* Gif Item */}

    </>
  )
}

