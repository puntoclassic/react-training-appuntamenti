import { useState } from "react";
import AddListItem from "./AddListItem";
import RenderList from "./RenderList";

export default function Appuntamenti() {
    const [items, setItems] = useState([]);

    const addItemAction = (item) => {
        setItems((oldList) => {
            var newList = [...oldList];
            newList.push(item);
            return newList;
        });
    };

    const deleteItemAction = (item) => {
        setItems((oldList) => {
            var newList = [...oldList];
            return newList.filter((i) => i.descrizione !== item.descrizione && i.dipendente !== item.dipendente && i.orario !== item.orario);
        });
    };
    console.log("Rebuild");

    return (
        <>
            <h4 className="my-3">Appuntamenti</h4>
            <AddListItem onItemAdd={addItemAction}></AddListItem>
            <RenderList items={items} onItemDelete={deleteItemAction}></RenderList>
        </>
    );
}

