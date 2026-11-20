/**
 * Reusing this component from the JS2 assingment to see if it is needed.
 * Takes a datestring as param
 * Converts it to the Brittish date-time format
 * Creates it as a Date-object
 * Returns the new date formatted.
 */

export function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}
