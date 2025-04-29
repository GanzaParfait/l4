import One from '../images/one.jpg'
import Two from '../images/two.jpg'
import Three from '../images/three.jpg'
import Four from '../images/four.jpg'
import Five from '../images/five.jpg'
import Six from '../images/six.jpg'

function Library () {
  return (
    <>
      <div className='img-container row'>
        <div className='col-md-4'>
          <img src={One} alt='' />
        </div>
        <div className='col-md-4'>
          <img src={Two} alt='' />
        </div>
        <div className='col-md-4'>
          <img src={Three} alt='' />
        </div>
      </div>

      <div className='img-container row'>
        <div className='col-md-4'>
          <img src={Four} alt='' />
        </div>
        <div className='col-md-4'>
          <img src={Five} alt='' />
        </div>
        <div className='col-md-4'>
          <img src={Six} alt='' />
        </div>
      </div>
    </>
  )
}

export default Library
