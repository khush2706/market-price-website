import './Table.css'
import { baseURL, getThirtyYear, getYesterdayTomorrow, formatTableData } from '../../utils'
import { useState, useEffect } from 'react'
import TableLoader from '../tableLoader/TableLoader'

const Table = () => {
  const [toMax, setToMax] = useState()
  const [toMin, setToMin] = useState()
  const [fromMax, setFromMax] = useState()
  const [fromMin, setFromMin] = useState()
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [type, setType] = useState('AAPL')
  const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  const [apiPaginationInfo, setApiPaginationInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { currentFormattedDate, pastFormattedDate } = getThirtyYear()
  const recordsPerPage = 7
  const apiKey = import.meta.env.VITE_API_KEY
  const displayTableData = data && data.length !== 0 && !error
  const disablePrev = count === 1 || !data.length
  const disableNext =
    (count === Math.ceil(data?.length / recordsPerPage) &&
      apiPaginationInfo?.count + apiPaginationInfo?.offset === apiPaginationInfo?.total) ||
    !data.length
  const displayActionBtns = data.length > 7 && !error

  function handleFromChange(e) {
    setToMin(getYesterdayTomorrow(e.target.value, 'tomorrow'))
    setFrom(e.target.value)
  }

  function handleToChange(e) {
    setFromMax(getYesterdayTomorrow(e.target.value, 'yesterday'))
    setTo(e.target.value)
  }

  function handleTypeChange(e) {
    setType(e.target.value)
  }

  function handlePrevious() {
    setCount((state) => {
      return state - 1
    })
  }

  function handleNext() {
    if (count != Math.ceil(data?.length / recordsPerPage)) {
      setCount((state) => {
        return state + 1
      })
    } else if (
      count === Math.ceil(data?.length / recordsPerPage) &&
      apiPaginationInfo?.count + apiPaginationInfo?.offset < apiPaginationInfo?.total
    ) {
      getApiCall(apiPaginationInfo?.offset + apiPaginationInfo?.count, data)
    }
  }

  function getApiCall(offset, _data = data) {
    setLoading(true)
    const url = `${baseURL}?access_key=${apiKey}&symbols=${type}&date_from=${from}&date_to=${to}&limit=1000&offset=${offset}`
    fetch(url, {
      referrerPolicy: 'unsafe-url'
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw new Error(error.error.message)
          })
        } else return res.json()
      })
      .then((res) => {
        setError(null)
        setApiPaginationInfo(res.pagination)
        if (!res || !res.data.length) throw new Error('404 No results found.')
        let formatData = formatTableData(res, _data)
        setData((state) => [...state, ...formatData])
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => setLoading(false))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setData([])
    getApiCall(0, [])
  }

  function formReset() {
    setFrom('')
    setTo('')
    setType('AAPL')
    setToMax(currentFormattedDate)
    setToMin(pastFormattedDate)
    setFromMax(currentFormattedDate)
    setFromMin(pastFormattedDate)
  }

  useEffect(() => {
    formReset()
  }, [])

  return (
    <>
      <form className="filters" method="get" onSubmit={handleSubmit}>
        <div className="filter from">
          <label htmlFor="from">From</label>
          <input
            type="date"
            id="from"
            min={fromMin}
            max={fromMax}
            value={from}
            onChange={handleFromChange}
            required
          />
        </div>
        <div className="filter to">
          <label htmlFor="to">To</label>
          <input
            type="date"
            id="to"
            min={toMin}
            max={toMax}
            value={to}
            onChange={handleToChange}
            required
          />
        </div>
        <div className="filter type">
          <label htmlFor="type">Type of Stock</label>
          <select name="type" id="type" value={type} onChange={handleTypeChange} required>
            <option className="option" value="AAPL">
              AAPL
            </option>
            <option className="option" value="MSFT">
              MSFT
            </option>
          </select>
        </div>
        <button className="action-btn" type="reset" onClick={formReset}>
          Reset
        </button>
        <button className="action-btn" type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <TableLoader />
      ) : (
        <>
          <div className="table">
            <div className="row-group">
              <div className="headers row">
                <div>Date</div>
                <div>Opening Price</div>
                <div>Closing Price</div>
              </div>
              <hr />
            </div>
            {error && <div className="error">ERROR: {error} Please try again</div>}
            {displayTableData &&
              data?.slice((count - 1) * recordsPerPage, count * recordsPerPage)?.map((item) => {
                return (
                  <div key={item?.date} className="row-group table-data">
                    <div className="row">
                      <div>{item?.date}</div>
                      <div style={{ color: item?.openColor }}>{item?.open}</div>
                      <div style={{ color: item?.closeColor }}>{item?.close}</div>
                    </div>
                    <hr />
                  </div>
                )
              })}
          </div>
          {displayActionBtns && (
            <div className="action-grp">
              <button className="action-btn" onClick={handlePrevious} disabled={disablePrev}>
                Prev
              </button>
              <button className="action-btn" onClick={handleNext} disabled={disableNext}>
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Table
