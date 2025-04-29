function City () {
  const cities = [
    'Kigali',
    'Brazzavile',
    'Kampala',
    'Lagos',
    'Paris',
    'Pretoria'
  ]

  let indexCount = 3

  return (
    <>
      <h1>City</h1>
      <ul className='list-group'>
        {cities.map((city, index) => (
          <li
            className={
              index === indexCount
                ? 'list-group-item active'
                : 'list-group-item'
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  )
}

export default City
