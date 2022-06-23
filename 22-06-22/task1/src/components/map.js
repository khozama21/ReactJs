function Map() {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];

    return (
    
        <div className="users">
        ************************************ <br></br>
        Fruits Traversed: 
            {Fruits.map((fruit) => (
                <div className="user"><li>{fruit.name} </li>
                <li>{fruit.color} </li></div>
            ))}
        </div>
   
    );

}


export default Map;