import { ValidationError, UnprocessableEntityException } from '@nestjs/common';

/**
 * Custom validation exception factory for NestJS ValidationPipe
 */
export function validationExceptionFactory(errors: ValidationError[]) {
  console.dir({ errors }, { depth: null }); // Logs the validation errors in console

  throw new UnprocessableEntityException({
    statusCode: 422,
    message: 'Unprocessable Entity',
    errors: errors.reduce((acc, error) => {
      acc[error.property] = Object.values(error.constraints || {});
      return acc;
    }, {}),
  });
}
