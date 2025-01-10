// Replace this with your GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Function to track page views
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Function to track custom events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,  // Optional in GA4
    event_label: label,        // Optional in GA4
    value: value,              // Optional in GA4
  });
};