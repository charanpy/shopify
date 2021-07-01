const code = 400;

const handleDuplicateError = (e) => {
  const [field, name] = Object.entries(e?.keyValue)[0];

  return [
    code,
    `${field} with ${name} already exists.${field} should be unique`,
  ];
};

const handleValidationError = (err) => {
  let errors = Object.values(err.errors).map(
    (el: { message: string }) => el.message
  );
  let code = 400;
  if (errors.length > 1) {
    const formattedErrors = errors.join('');
    return [code, formattedErrors];
  } else {
    return [code, errors];
  }
};

const handleCastError = () => {
  return [400, 'No data found'];
};

export const handleMongoError = (e) => {
  console.log(e.name, e.code);

  if (!e?.name && !e?.code) {
    console.log('nooope', !e?.name || !e?.code);

    return [500, 'Something went wrong!Please try again'];
  }

  if (e?.code === 11000) {
    return handleDuplicateError(e);
  }

  if (e?.name === 'ValidationError') {
    return handleValidationError(e);
  }
  if (e?.name === 'CastError') {
    return handleCastError();
  }
};
