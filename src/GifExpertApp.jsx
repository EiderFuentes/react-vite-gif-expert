import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


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
        <h1>GifExpert App</h1>

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

