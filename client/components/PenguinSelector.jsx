import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectorImages from '../../data/penguinImage'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

function PenguinSelector () {
  const [currentImage, setCurrent] = useState(0)
  const length = SelectorImages.length

  function nextSlide () {
    setCurrent(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  function prevSlide () {
    setCurrent(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  return (
    <section className="typeSelector">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {SelectorImages.map((photo, index) => {
        return (
          <div className={index === currentImage ? 'active_image' : 'inactive_image'} key={index}>
            {index === currentImage && (
              <Link to={`/type/${photo.name}`}><img src={`images/${photo.image}`} alt="" className="imageType" style={{ textDecoration: 'none' }}/>
                <h2 className="selectType">{photo.name}</h2></Link>
            )}
          </div>
        )
      })}
    </section>
  )
}
export default PenguinSelector
