import React from 'react'

const FilmPoster = (props) => {
    var posterUrl2 = props.posterUrl+props.try4
    return (
        <div>
            <img src={posterUrl2} alt="" />
        </div>
    )
}

export default FilmPoster
