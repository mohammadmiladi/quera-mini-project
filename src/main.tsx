import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './design/main.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
