class UtilsHandler {
  customValidationError(message: string, param: string, location: string) {
    return [
      {
        value: '',
        msg: message,
        param: param,
        location: location,
      },
    ];
  }
}

export default new UtilsHandler();
