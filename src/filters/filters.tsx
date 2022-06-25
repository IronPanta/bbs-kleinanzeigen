import './filters.css';

function Filters(){
    return(<>
        <h1>Filter</h1>
        <div className="filterPrice">
            <h2>Preis:</h2>
            <div><input type="number"></input>€ - <input type="number"></input>€</div>
        </div>
    </>);
}
export default Filters;