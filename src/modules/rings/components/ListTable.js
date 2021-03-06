import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from 'moment';
import { Table,Badge } from 'antd';
import ListPagination from './ListPagination';
import schema from '../schema';

function ListBlock({LIST,actions}) {
  const {
      items=[],
      loading,
      page={}
  } = LIST
  const renders = {
      ringHash:(value,item,index)=><Link className="text-truncate d-block" style={{maxWidth:'150px'}} to={`/rings/detail/${value}`}>{value}</Link>,
      miner:(value,item,index)=> <Link className="text-truncate d-block" style={{maxWidth:'150px'}} to={`/miner/detail/${value}`}>{value}</Link>,
      feeRecipient:(value,item,index)=> <a className="text-truncate d-block" style={{maxWidth:'150px'}} target="_blank" href={`https://etherscan.io/address/${value}`}>{value}</a>,
      txHash:(value,item,index)=> <a className="text-truncate d-block" style={{maxWidth:'150px'}} target="_blank" href={`https://etherscan.io/tx/${value}`}>{value}</a>,
      blockNumber:(value,item,index)=> <a className="text-truncate d-block" style={{maxWidth:'150px'}} target="_blank" href={`https://etherscan.io/block/${value}`}>{value}</a>,
      protocol:(value,item,index)=> <a className="text-truncate d-block" style={{maxWidth:'150px'}} target="_blank" href={`https://etherscan.io/address/${value}`}>{value}</a>,
      totalLrcFee:(value,item,index)=> (Number(value)/1e18).toFixed(6),
      timestamp:(value,item,index)=> moment(value).format('YYYY/MM/DD HH:mm:ss')
  }
  const columns = schema.map(field=>{
    return {
        title:field.title,
        dataIndex:field.name,
        render:renders[field.name],
        className:'text-nowrap',
        sorter:true,
    }
  })
  const tableChange = (pagination, filters, sorter)=>{
    // sorder {field,order}
    // filters {field,field}
    const sort = {
      [sorter.field]:sorter.order // TODO
    }
    actions.queryChange({
      sort,filters // TODO
    }) 
  }
  const tableProps={
    dataSource:items,
    columns:columns,
    pagination:false,
    loading:loading,
    scroll:{x:1000},
    onChange:tableChange
  }
  return (
    <div className="">
      <Table {...tableProps}/>  
    </div>
  )
}

ListBlock.propTypes = {
};

export default ListBlock
