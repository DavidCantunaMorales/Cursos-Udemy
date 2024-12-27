import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  {
    /*
    Esto es lo que estamos haciendo con la llamada mediante la funcion anonima

    const onAddCategory2 = (dato) => {
      onAddCategory(dato);
    };
    */
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <AddCategory onNewCategory={onAddCategory2} /> */}

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </>
  );
};
