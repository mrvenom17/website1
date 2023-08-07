import { useState } from "react";


function App() {
  const [cards] = useState([
    {
      title: 'Team 1',
      text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias labore vel distinctio odio magnam, molestiae veniam sed eveniet atque inventore praesentium, tempore aliquam sunt cum soluta? Reiciendis, harum repellat. '
    },
    {
      title: 'Team 2',
      text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias labore vel distinctio odio magnam, molestiae veniam sed eveniet atque inventore praesentium, tempore aliquam sunt cum soluta? Reiciendis, harum repellat. '
    },
    {
      title: 'Team 3',
      text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias labore vel distinctio odio magnam, molestiae veniam sed eveniet atque inventore praesentium, tempore aliquam sunt cum soluta? Reiciendis, harum repellat. '
    },
    {
      title: 'Team 4',
      text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias labore vel distinctio odio magnam, molestiae veniam sed eveniet atque inventore praesentium, tempore aliquam sunt cum soluta? Reiciendis, harum repellat. '
    },
    {
      title: 'Team 5',
      text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias labore vel distinctio odio magnam, molestiae veniam sed eveniet atque inventore praesentium, tempore aliquam sunt cum soluta? Reiciendis, harum repellat. '
    },
  ])
  return(
    <div>
    <section>
      <div className="container">
        <h1>Our Team</h1>
        <div className="cards">
          {
            cards.map((card, i) => (
              

          <div key={i } className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button className="btn"> Read More</button>
          </div>
            ) )
          }
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
