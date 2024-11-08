const formatDateTime = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    hour12: false,
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

export default formatDateTime;
