

const BeerCard = ({ beer }) => {
    return (
      <div>
          <img className='detail-image' src={beer.image_url} />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
  
      </div>
    )
  }
  
  export default BeerCard
  
  
  // image
  // name
  // tagline
  // first_brewed
  // attenuation_level
  // description
  // contributed_by