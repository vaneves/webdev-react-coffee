import Coffee from "./Coffee"

export default function CoffeeList({ type, coffees }) {
  return <ul className="coffees">
    <h1>{type}</h1>
    {coffees.map((coffee, index) => {
      return <Coffee key={index} coffee={coffee} />
    })}
  </ul>
}

// github.com/vaneves
