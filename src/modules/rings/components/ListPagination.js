import React from 'react';
import { Pagination} from 'antd';

function DataTablePagination({actions={},LIST={}}){
  let {page={}} = LIST;
  let handlePageChange = (current,size) => {
    // action.payload { page,filters,sort,cloumns }
    actions.pageChange({
      page:{
        current,
        size,
      }
    })
  }
  // let showTotal = (total, range) => {
  //   // range = [start,end];
  //   return `共 ${total} 条记录，当前第 ${range[0]}-${range[1]} 条`;
  // }
  let paginationProps = {
     className:'',
     total:page.total,
     current:page.current,
     onChange:handlePageChange,
     onShowSizeChange:handlePageChange, // 修改分页大小的回调
     pageSize:Number(page.size)||10,
     showSizeChanger:true,
     showQuickJumper:true,
     pageSizeOptions:['10','20','30','40','50'], // 必须是字符串，不能使数字
     // showTotal:true,
     // simple:true,
  }
  return (
    <div className="text-center p25">
      <Pagination {...paginationProps}/>
    </div>
  );
}

export default DataTablePagination;
