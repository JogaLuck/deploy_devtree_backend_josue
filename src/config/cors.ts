import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
  origin: true, // Permitir todos los origins temporalmente
  credentials: true,
  optionsSuccessStatus: 200,
}