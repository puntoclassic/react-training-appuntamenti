import { useState } from "react";
import AddListItem from "./AddListItem";
import RenderList from "./RenderList";

export default function Appuntamenti() {
    const [items, setItems] = useState([]); //array vuoto

    //aggiunti un elemento all'array items
    const addItemAction = (item) => {
        setItems((oldList) => {
            //va creata una nuova lista altrimenti il setState non fa il re-rendering
            var newList = [...oldList];

            //aggiunge il nuovo elemento nella copia della lista vecchia
            newList.push(item);
            return newList;
        });
    };

    const deleteItemAction = (item) => {
        setItems((oldList) => {
            //crea una nuova lista
            var newList = [...oldList];

            //restituisce una nuova lista escludendo l'elemento passato come parametro
            return newList.filter((i) => i.descrizione !== item.descrizione && i.dipendente !== item.dipendente && i.orario !== item.orario);
        });
    };

    return (
        <>
            <h4 className="my-3">Appuntamenti</h4>
            <AddListItem onItemAdd={addItemAction}></AddListItem>
            <RenderList items={items} onItemDelete={deleteItemAction}></RenderList>
        </>
    );
}

