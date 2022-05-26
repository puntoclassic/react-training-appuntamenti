import { useState } from "react";

export default function AddListItem({ onItemAdd }) {

    //oggetto vuoto 
    const [oggetto, setOggetto] = useState({
        "descrizione": "",
        "orario": "",
        "dipendente": ""
    });

    /**
     * COSA FA IL CODICE QUI DI SEGUITO ?
     * Ogni elemento di input viene impostato il suo valore che viene prelevato dall'oggetto
     * Ogni elmeneto di input all'evento onChange viene impostato il valore corrente nella corrispondente proprietà nell'oggetto
     */
    return <>
        <div className="col-lg-6">
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Descrizione</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={oggetto.descrizione} onChange={(e) => { setOggetto({ ...oggetto, "descrizione": e.target.value }) }} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Orario</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" value={oggetto.orario} onChange={(e) => { setOggetto({ ...oggetto, "orario": e.target.value }) }} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Dipendente</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" value={oggetto.dipendente} onChange={(e) => { setOggetto({ ...oggetto, "dipendente": e.target.value }) }} />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-4">
                    <button className="btn btn-success" type="button" onClick={(e) => {
                        onItemAdd(oggetto); // chiama la funzione presente nel componente padre per aggiungere l'oggetto
                        setOggetto({
                            "descrizione": "",
                            "orario": "",
                            "dipendente": ""
                        }); // reset dei valori dell'oggetto come pulizia del form
                    }}>Aggiungi</button>
                </div>
            </div>
        </div>
    </>;
}