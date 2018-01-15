import React from 'react';
import {Breadcrumb} from 'antd';
import Components from '../components';
import Containers from '../containers';

function Page(props){
  const filters = {
    ringHash:null
  }
  const containerProps={
    ...props,
    filters
  }
  return (
    <div>
    {
      false &&
      <Breadcrumb>
         <Breadcrumb.Item>Home</Breadcrumb.Item>
         <Breadcrumb.Item><a href="">Ring Detail</a></Breadcrumb.Item>
      </Breadcrumb>
    }
    <Containers.StandList {...containerProps}>
        <Components.ListTable />
        <Components.ListPagination />
    </Containers.StandList>
    </div>
  )
}

export default Page


