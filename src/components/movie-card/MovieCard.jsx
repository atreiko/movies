import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../button/Button'

import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import './movie-card.scss'

const MovieCard = props => {
  const item = props.item

  const link = `/${category[props.category]}/${item.id}`

  const bg = apiConfig.originalImage(item.poster_path || item.backdrop_path)

  return (
    <Link to={link}>
      <div className='movie-card' style={{background: `url(${bg})`}}>
        <Button>
          <i className='bx bx-play' />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCard