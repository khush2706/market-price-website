import ParaLoader from '../paraLoader/ParaLoader'
import './TableLoader.css'

const TableLoader = () => {
  return (
    <>
      <div className="table-loader">
        {Array(6)
          .fill()
          .map((i, ind) => {
            return (
              <div className="row-loader" key={ind}>
                <ParaLoader />
                <ParaLoader />
                <ParaLoader />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default TableLoader
