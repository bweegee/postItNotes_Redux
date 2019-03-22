import React from 'react'
import { connect, } from 'react-redux'
import PostIt from './PostIt'

const PostIts = ({ postits }) => (
  <div>
{ postits.map( p =>
      <PostIt key={p.id} {...p} />
)}
  </div>
)

const mapStateToProps = (state) => {
  return { postits: state.postits, }
}

export default connect(mapStateToProps)(PostIts)
