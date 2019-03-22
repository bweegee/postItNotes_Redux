import React from 'react'
import { connect, } from 'react-redux'

const PostIt = ({ id, note, dispatch }) => (
  <div>
    { note }
  </div>
)

export default connect()(PostIt)
