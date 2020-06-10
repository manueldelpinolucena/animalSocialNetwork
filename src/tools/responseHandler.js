export function errorResponse(message) {
  return {
    error: true,
    message,
    service: `[Indigitall Server]`,
  };
}

export function successResponse(message) {
  return {
    message,
    service: `[Indigitall Server]`,
  };
}
