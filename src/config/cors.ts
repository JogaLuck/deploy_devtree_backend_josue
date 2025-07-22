import { CorsOptions } from 'cors'

const whiteList = process.env.FRONTEND_URL?.split(',') || []

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    // Log para debugging
    console.log('Request origin:', origin)
    console.log('Environment FRONTEND_URL:', process.env.FRONTEND_URL)
    console.log('Whitelist array:', whiteList)
    
    // Permitir todos los origins en desarrollo
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true)
    }
    
    // En producción, verificar whitelist
    if (!origin || whiteList.includes(origin)) {
      callback(null, true)
    } else {
      console.error('CORS Error - Origin not allowed:', origin)
      callback(new Error(`CORS Error: Origin ${origin} not allowed`))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With', 
    'Content-Type', 
    'Accept',
    'Authorization',
    'Cache-Control'
  ],
}