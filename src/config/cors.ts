import { CorsOptions } from 'cors'

const whiteList = [
  process.env.FRONTEND_URL,            // https://deploy-devtree-frontend.netlify.app
  'http://localhost:5173',             // Desarrollo local
]

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  },
  credentials: true
}
