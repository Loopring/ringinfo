import React from 'react';
import Components from '../components';
import Containers from '../containers';

function Page(props){
  const id = props.match && props.match.params && props.match.params.id
  const filters = {
    ringHash:id
  }
  const containerProps={
    ...props,
    filters
  }
  return (
    <Containers.StandList {...containerProps}>
      <Components.Detail />
    </Containers.StandList>
  )
}

export default Page


