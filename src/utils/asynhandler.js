// const asyncHandler = (fn) => async () => {
//   try {
//     await fn(req, res, next)
//   } catch (error) {
//     console.error(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export { asyncHandler };

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
