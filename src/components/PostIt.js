import React from 'react'
import { connect, } from 'react-redux'
import styled from 'styled-components'

const PostIt = ({ id, note, dispatch }) => (
  <NoiceDiv>
    { note }
    <br />
    <button>
      Edit
    </button>
    <button>
      Delete
    </button>
  </NoiceDiv>
)

const NoiceDiv = styled.div`
  text-align: center;
  padding: 5px;
  border: solid 1px black
  background: #deff00;
`
export default connect()(PostIt)
