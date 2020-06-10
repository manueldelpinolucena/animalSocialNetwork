export function errorHandler(error, req, res, next) {
  next();
  console.error(`[Indigitall]`, error);
  res.status(400).json({
    error: true,
    message: error.message,
    service: `[Indigital Service]`,
  });
}
