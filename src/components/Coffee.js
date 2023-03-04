import Ingredient from "./Ingredient"

export default function Coffee({ coffee }) {
  return <li className="coffee">
    <img src={coffee.image} alt={coffee.title} />
    <h2>{coffee.title}</h2>
    <p>{coffee.description}</p>
    {coffee.ingredients.map((ingredient, index) => {
      return <Ingredient key={index} name={ingredient} />
    })}
  </li>
}