import ParaLoader from '../paraLoader/ParaLoader'
import './TableLoader.css'

const TableLoader = () => {
  function getRows(num) {
    const array = []

    for (var i = 1; i <= num; i++) {
      array.push(
        <div className="row-loader">
          <ParaLoader />
          <ParaLoader />
          <ParaLoader />
        </div>
      )
    }

    return array
  }
  return (
    <>
      <div className="table-loader">{getRows(6)}</div>
    </>
  )
}

export default TableLoader
