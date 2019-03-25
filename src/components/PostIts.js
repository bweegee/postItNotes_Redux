import React from 'react'
import { connect, } from 'react-redux'
import styled from 'styled-components'
import PostIt from './PostIt'
import PostItForm from './PostItForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostIts = ({ postits }) => (
  <div>
    <PostItForm />
    <AddButt>
      <FontAwesomeIcon
        icon="plus"
        color="green"
        size="3x"
      />
    </AddButt>
    <br />
    <BackGround>
      <Grid>
        { postits.map( p =>
          <PostIt key={p.id} {...p} />
        )}
      </Grid>
    </BackGround>
  </div>
)

const mapStateToProps = (state) => {
  return { postits: state.postits, }
}

const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  grid-gap: 35px;
  white-space: pre-wrap;
`

const BackGround = styled.div`
  background: navy;
`

const AddButt = styled.button`
  background: transparent;
  border: none;
`

export default connect(mapStateToProps)(PostIts)
