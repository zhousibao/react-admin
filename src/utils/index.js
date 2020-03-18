import moment from 'moment'

// 时间格式化
export function formatDate(val, formate = 'YYYY-MM-DD HH:mm:ss'){
  return val ? moment(val).format(formate) : ''
}

 
/** *
 *分页s
 */
export function pagination({ pageNum, pageSize = 10, total }, callback){
  return {
    onChange: (pageNum, pageSize)=>{
      callback(pageNum, pageSize)
    },
    current: pageNum,
    pageSize,
    total,
    showTotal: ()=>{
      return `共${total}条`
    },
    showQuickJumper: true,
  }
}