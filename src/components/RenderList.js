import ListItem from "./ListItem";

export default function RenderList({ items, onItemDelete }) {
    return <>
        {
            items.map((item, index) => <ListItem onItemDelete={onItemDelete} key={index} {...item} />)
        }</>
}