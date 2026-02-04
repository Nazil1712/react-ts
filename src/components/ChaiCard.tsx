interface ChaiCardProp {
    name :string;
    price: number;
    isSpecial?: boolean
}

const ChaiCard = (props: ChaiCardProp) => {
  return (
    <div>
        <article>
            <h2>{props.name} {props.isSpecial && <span>⭐</span>}</h2>
            <p>({props.price})</p>
        </article>
    </div>
  )
}

export default ChaiCard
