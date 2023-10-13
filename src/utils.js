export const baseURL = 'http://api.marketstack.com/v1/eod'

export function getThirtyYear() {
  const currentDate = new Date()
  const pastYear = currentDate.getFullYear() - 30
  const pastDate = new Date(pastYear, currentDate.getMonth(), currentDate.getDate())
  const currentFormattedDate = formatDate(currentDate)
  const pastFormattedDate = formatDate(pastDate)

  return { currentFormattedDate, pastFormattedDate }
}

export function getYesterdayTomorrow(date, dayType) {
  const parts = date.split('-')
  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1
  const day = parseInt(parts[2], 10)
  const currentDate = new Date(year, month, day)

  if (dayType === 'yesterday')
    // Calculate the timestamp for one day before the input date by subtracting 1 day worth of milliseconds (86400000 milliseconds)
    currentDate.setTime(currentDate.getTime() - 86400000)
  else currentDate.setTime(currentDate.getTime() + 86400000)
  return formatDate(currentDate)
}

export function formatDate(inputDate) {
  let year = inputDate.getFullYear()
  let month = inputDate.getMonth() + 1
  let day = inputDate.getDate()

  // Format the calculated date as a string (e.g., "YYYY-MM-DD")
  var formattedDate =
    year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day

  return formattedDate
}

export function formatTableData(data, prevData) {
  let prevClose = data?.data[0]?.open
  if (prevData.length) {
    prevClose = prevData[prevData.length - 1].close
  }
  let formattedData = []
  data?.data?.forEach((item) => {
    formattedData.push({
      open: item?.open,
      close: item?.close,
      date: item?.date.split('T')[0],
      closeColor: item?.open === item?.close ? 'white' : item?.open > item?.close ? 'red' : 'green',
      openColor: prevClose === item?.open ? 'white' : prevClose > item?.open ? 'red' : 'green'
    })
    prevClose = item?.close
  })

  return formattedData
}

export const dummyData = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 28,
    total: 28
  },
  data: [
    {
      open: 178.2,
      high: 179.85,
      low: 177.6,
      close: 179.8,
      volume: 47551098.0,
      adj_high: 179.85,
      adj_low: 177.6,
      adj_close: 179.8,
      adj_open: 178.2,
      adj_volume: 47551098.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-11T00:00:00+0000'
    },
    {
      open: 178.1,
      high: 179.72,
      low: 177.95,
      close: 178.39,
      volume: 42686493.0,
      adj_high: 179.72,
      adj_low: 177.95,
      adj_close: 178.39,
      adj_open: 178.1,
      adj_volume: 43698019.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-10T00:00:00+0000'
    },
    {
      open: 176.81,
      high: 179.05,
      low: 175.805,
      close: 178.99,
      volume: 40987563.0,
      adj_high: 179.05,
      adj_low: 175.8,
      adj_close: 178.99,
      adj_open: 176.81,
      adj_volume: 42390772.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-09T00:00:00+0000'
    },
    {
      open: 173.8,
      high: 177.99,
      low: 173.18,
      close: 177.49,
      volume: 57224100.0,
      adj_high: 177.99,
      adj_low: 173.18,
      adj_close: 177.49,
      adj_open: 173.8,
      adj_volume: 57266675.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-06T00:00:00+0000'
    },
    {
      open: 173.79,
      high: 175.4411,
      low: 172.68,
      close: 174.91,
      volume: 48450371.0,
      adj_high: 175.45,
      adj_low: 172.68,
      adj_close: 174.91,
      adj_open: 173.79,
      adj_volume: 48527918.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-05T00:00:00+0000'
    },
    {
      open: 171.09,
      high: 174.21,
      low: 170.98,
      close: 173.66,
      volume: 52902698.0,
      adj_high: 174.21,
      adj_low: 170.97,
      adj_close: 173.66,
      adj_open: 171.09,
      adj_volume: 53020286.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-04T00:00:00+0000'
    },
    {
      open: 172.26,
      high: 173.63,
      low: 170.82,
      close: 172.4,
      volume: 49381900.0,
      adj_high: 173.63,
      adj_low: 170.82,
      adj_close: 172.4,
      adj_open: 172.255,
      adj_volume: 49594613.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-03T00:00:00+0000'
    },
    {
      open: 171.22,
      high: 174.3,
      low: 171.0,
      close: 173.75,
      volume: 50897710.0,
      adj_high: 174.3,
      adj_low: 170.93,
      adj_close: 173.75,
      adj_open: 171.22,
      adj_volume: 52164535.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-10-02T00:00:00+0000'
    },
    {
      open: 172.02,
      high: 173.07,
      low: 170.34,
      close: 171.21,
      volume: 51814200.0,
      adj_high: 173.07,
      adj_low: 170.341,
      adj_close: 171.21,
      adj_open: 172.02,
      adj_volume: 51861083.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-29T00:00:00+0000'
    },
    {
      open: 169.34,
      high: 172.026,
      low: 167.62,
      close: 170.69,
      volume: 56190062.0,
      adj_high: 172.03,
      adj_low: 167.62,
      adj_close: 170.69,
      adj_open: 169.34,
      adj_volume: 56294419.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-28T00:00:00+0000'
    },
    {
      open: 172.62,
      high: 173.04,
      low: 169.05,
      close: 170.43,
      volume: 66830700.0,
      adj_high: 173.04,
      adj_low: 169.05,
      adj_close: 170.43,
      adj_open: 172.62,
      adj_volume: 66921808.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-27T00:00:00+0000'
    },
    {
      open: 174.82,
      high: 175.055,
      low: 171.66,
      close: 171.96,
      volume: 61108831.0,
      adj_high: 175.2,
      adj_low: 171.66,
      adj_close: 171.96,
      adj_open: 174.82,
      adj_volume: 64588945.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-26T00:00:00+0000'
    },
    {
      open: 174.2,
      high: 176.96,
      low: 174.155,
      close: 176.08,
      volume: 45958311.0,
      adj_high: 176.97,
      adj_low: 174.15,
      adj_close: 176.08,
      adj_open: 174.2,
      adj_volume: 46172740.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-25T00:00:00+0000'
    },
    {
      open: 174.67,
      high: 177.08,
      low: 174.05,
      close: 174.79,
      volume: 56663000.0,
      adj_high: 177.079,
      adj_low: 174.05,
      adj_close: 174.79,
      adj_open: 174.67,
      adj_volume: 56725385.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-22T00:00:00+0000'
    },
    {
      open: 174.55,
      high: 176.3,
      low: 173.86,
      close: 173.93,
      volume: 63047900.0,
      adj_high: 176.3,
      adj_low: 173.86,
      adj_close: 173.93,
      adj_open: 174.55,
      adj_volume: 63149116.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-21T00:00:00+0000'
    },
    {
      open: 179.26,
      high: 179.695,
      low: 175.4,
      close: 175.49,
      volume: 58436180.0,
      adj_high: 179.695,
      adj_low: 175.4,
      adj_close: 175.49,
      adj_open: 179.26,
      adj_volume: 58436181.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-20T00:00:00+0000'
    },
    {
      open: 177.52,
      high: 179.63,
      low: 177.13,
      close: 179.07,
      volume: 51769600.0,
      adj_high: 179.63,
      adj_low: 177.13,
      adj_close: 179.07,
      adj_open: 177.52,
      adj_volume: 51826941.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-19T00:00:00+0000'
    },
    {
      open: 176.48,
      high: 179.38,
      low: 176.44,
      close: 177.97,
      volume: 65315230.0,
      adj_high: 179.38,
      adj_low: 176.17,
      adj_close: 177.97,
      adj_open: 176.48,
      adj_volume: 67257573.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-18T00:00:00+0000'
    },
    {
      open: 176.48,
      high: 176.5,
      low: 173.82,
      close: 175.01,
      volume: 109205100.0,
      adj_high: 176.495,
      adj_low: 173.82,
      adj_close: 175.01,
      adj_open: 176.48,
      adj_volume: 109259461.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-15T00:00:00+0000'
    },
    {
      open: 174.0,
      high: 176.1,
      low: 173.58,
      close: 175.74,
      volume: 60832500.0,
      adj_high: 176.1,
      adj_low: 173.58,
      adj_close: 175.74,
      adj_open: 174.0,
      adj_volume: 60895757.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-14T00:00:00+0000'
    },
    {
      open: 176.51,
      high: 177.3,
      low: 173.98,
      close: 174.21,
      volume: 84165800.0,
      adj_high: 177.3,
      adj_low: 173.98,
      adj_close: 174.21,
      adj_open: 176.51,
      adj_volume: 84267928.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-13T00:00:00+0000'
    },
    {
      open: 179.49,
      high: 180.12,
      low: 174.82,
      close: 176.3,
      volume: 88211615.0,
      adj_high: 180.13,
      adj_low: 174.82,
      adj_close: 176.3,
      adj_open: 179.49,
      adj_volume: 90370192.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-12T00:00:00+0000'
    },
    {
      open: 180.07,
      high: 180.3,
      low: 177.34,
      close: 179.36,
      volume: 58796496.0,
      adj_high: 180.3,
      adj_low: 177.34,
      adj_close: 179.36,
      adj_open: 180.07,
      adj_volume: 58953052.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-11T00:00:00+0000'
    },
    {
      open: 178.35,
      high: 180.239,
      low: 177.79,
      close: 178.18,
      volume: 65602066.0,
      adj_high: 180.239,
      adj_low: 177.79,
      adj_close: 178.18,
      adj_open: 178.35,
      adj_volume: 65602066.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-08T00:00:00+0000'
    },
    {
      open: 175.18,
      high: 178.21,
      low: 173.54,
      close: 177.56,
      volume: 109389817.0,
      adj_high: 178.21,
      adj_low: 173.54,
      adj_close: 177.56,
      adj_open: 175.18,
      adj_volume: 112488803.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-07T00:00:00+0000'
    },
    {
      open: 188.4,
      high: 188.735,
      low: 181.47,
      close: 182.91,
      volume: 81059495.0,
      adj_high: 188.85,
      adj_low: 181.47,
      adj_close: 182.91,
      adj_open: 188.4,
      adj_volume: 81755816.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-06T00:00:00+0000'
    },
    {
      open: 188.28,
      high: 189.98,
      low: 187.61,
      close: 189.7,
      volume: 44502638.0,
      adj_high: 189.98,
      adj_low: 187.61,
      adj_close: 189.7,
      adj_open: 188.28,
      adj_volume: 45280027.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-05T00:00:00+0000'
    },
    {
      open: 189.485,
      high: 189.92,
      low: 188.28,
      close: 189.46,
      volume: 45766503.0,
      adj_high: 189.92,
      adj_low: 188.28,
      adj_close: 189.46,
      adj_open: 189.485,
      adj_volume: 45766503.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2023-09-01T00:00:00+0000'
    },
    {
      open: 189.485,
      high: 189.92,
      low: 188.28,
      close: 189.46,
      volume: 45766503.0,
      adj_high: 189.92,
      adj_low: 188.28,
      adj_close: 189.46,
      adj_open: 189.485,
      adj_volume: 45766503.0,
      split_factor: 1.0,
      dividend: 0.0,
      symbol: 'AAPL',
      exchange: 'XNAS',
      date: '2024-09-01T00:00:00+0000'
    }
  ]
}
