
//Qui preleviamo dal props solo quello che ci serve, quest'operazione si chiama decostruzione dell'oggetto
export default function ListItem({ descrizione, orario, dipendente, onItemDelete }) {
    return <>
        <div className="row my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{dipendente}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{orario}</h6>
                    <p className="card-text">{descrizione}</p>
                    <button className="btn btn-danger" onClick={(e) => {
                        //Chiama la funzione dell'elemento padre per eliminare item
                        onItemDelete({
                            "descrizione": descrizione,
                            "dipendente": dipendente,
                            "orario": orario,
                        });
                    }}>Elimina</button>
                </div>
            </div>
        </div>
    </>;
}