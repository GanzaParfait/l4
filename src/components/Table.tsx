import HisExcellency from "../images/pk.png"

function Table () {
  const data = [
    {
      id: 1,
      name: 'Bruce',
      age: 56,
      address: 'Kigali'
    },
    {
      id: 2,
      name: 'Keza',
      age: 156,
      address: 'Nyandungu'
    },
    {
      id: 3,
      name: 'Ngabire',
      age: 8,
      address: 'Nyarugenge'
    }
  ]
  return (
    <>
      <img src={ HisExcellency } alt='' />
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Names</th>
            <th scope='col'>Age</th>
            <th scope='col'>Address</th>
          </tr>
        </thead>
        {data.length === 0 ? <p>No record found</p> : null}
        <tbody>
          {data.map(record => (
            <tr>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
