import React from "react";
import { List, Container } from 'semantic-ui-react'

const ListExampleDivided = ({peers}) => {
  if(!peers) return;
  console.log(peers);

  const lists = peers.map( (peer) => {
    return(
      <List divided relaxed>
        <List.Item>
          <List.Icon name='money bill alternate outline' size='large' color="white" verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{peer}</List.Header>
            <List.Description as='a'>{peer}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  })

  return (
    <Container>
      {lists}
    </Container>
  )

}

export default ListExampleDivided
