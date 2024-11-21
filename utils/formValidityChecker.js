const isTextValid = (value) => {
  const regex = /^[A-Za-z\s]+$/i;
  return value !== '' && regex.test(value);
};

const isEmailValid = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  return value !== '' && regex.test(value);
};

const isBirthdateValid = (value) => {
  const currentYear = new Date().getFullYear();
  const [year] = value.split('-');
  // prettier-ignore
  return (currentYear - year) > 12;
};

export { isTextValid, isEmailValid, isBirthdateValid };
