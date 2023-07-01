import React, { useState } from 'react';

//Neste exemplo, criamos o componente ShoppingList, que é responsável por exibir a lista de compras e permitir a adição, exclusão e exibição dos itens. 
//Utilizamos o hook useState para gerenciar o estado dos itens, do nome do item e do preço do item.
// O componente exibe um formulário com campos de texto para o nome e preço do item, e um botão "Adicionar" para adicionar o item à lista. 
//Ao clicar no botão "Adicionar", o item é adicionado ao estado items usando a função setItems.
// Os itens da lista são exibidos em um elemento <ul>, onde cada item possui um botão "Excluir" que chama a função deleteItem ao ser clicado. 
//A função deleteItem remove o item correspondente do estado items.

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    if (itemName.trim() === '') {
      return;
    }

    const newItem = { name: itemName, price: itemPrice };
    setItems([...items, newItem]);
    setItemName('');
    setItemPrice('');
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <div>
        <input
          type="text"
          placeholder="Nome do item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preço do item"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button onClick={addItem}>Adicionar</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name} - R$ {item.price}</span>
            <button onClick={() => deleteItem(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
