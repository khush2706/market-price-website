# Oorjan Assignment

## About
This is a frontend assignment for oorjan technologies. The app is made using Vite + React. 

## Features
- ESLint and Prettier for code linting and formatting
- Fully responsive
- `from` and `to` calender inputs validaion so that if we select a date in `from` the `to` calender will only have valid selectable dates after the `from` date and vice versa. Also both the calenders will only show dates upto 30 yrs from the current date since the API only has the data for 30 yrs of time.
- API response catching to reduce the API requests. The app fetches first 1000 responses from the API, and if after that the user requires more responses(a check is performed to see if there is more data in the API) another request is made to get the data from 1001 entry to the next 1000 entries.
- Error handling for API responses
- Loading animation
- Well Structured Code