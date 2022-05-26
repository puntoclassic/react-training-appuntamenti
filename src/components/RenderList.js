import ListItem from "./ListItem";

export default function RenderList({ items, onItemDelete }) {
    //Render degli elementi nella lista, per ogni elemento passo come parametro azione da eseguire al click del tasto delete
    return <>
        {
            items.map((item, index) => <ListItem onItemDelete={onItemDelete} key={index} {...item} />)
        }</>
}