const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);
  const localTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return localTime;
}

//console.log(isoTimeFormat("2025-11-16T15:45:00Z"));  // Output: "03:45 PM"

export default isoTimeFormat