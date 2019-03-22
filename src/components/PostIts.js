import React from 'react'
import { connect, } from 'react-redux'

const PostIts = ({ postits }) => (
  <div>
    { postits.map( (p,i) => {
      return(
        <div key={i}>
          {p}
        </div>
      )
     })
    }
  </div>
)

const mapStateToProps = (state) => {
  return { postits: state.postits, }
}

export default connect(mapStateToProps)(PostIts)
