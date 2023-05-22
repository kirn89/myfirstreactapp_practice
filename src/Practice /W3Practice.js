import React from 'react'

const W3Practice = () => {
    const [car, setCar] = useState({
        myCar: {
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red",
        }
      
      });
    console.log(car.myCar.color);
    
      
    useEffect(() => {
        if (car.myCar.color === "red") {
          setCar((newCar) => ({
           ...newCar,
           myCar: {
            ...newCar.myCar, brand:'BMW'
           }
          }));
        }
      }, []);
    
      return (
        <div className="App">
          
          <h1>My {car.myCar.brand}</h1>
          <p>
            It is a {car.myCar.color} {car.myCar.model} from {car.myCar.year}.
          </p>
          <button className="">Bootstrap Button</button>
          <div className="card" style={{width: "18rem"}}>
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    
        </div>
      );
    }


export default W3Practice