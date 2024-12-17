import React from 'react';

// Inline CSS for styling
const styles = {
  section: {
    background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #fffbeb)', // Tailwind colors translated to hex codes
    padding: '50px 20px',
    borderRadius: '8px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginTop: '40px',
  },
  heading: {
    fontSize: '2.5em',
    color: '#F58025', // Orange 600 color for the heading (Regional Presence)
    fontWeight: '700',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  regionList: {
    listStyleType: 'none',
    padding: '0',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
  },
  regionItem: {
    fontSize: '1.5em',
    color: '#fb923c', // Orange 500 color for region names
    marginBottom: '10px',
    fontWeight: '600',
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    width: '100%',
    height: '300px', // Reduced height for a smaller map
    position: 'relative',
  },
  ctaButton: {
    padding: '15px 30px',
    fontSize: '1.1em',
    backgroundColor: '#F6AD55', // Orange 600 color for CTA button
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  ctaButtonHover: {
    backgroundColor: '#ea580c', // Darker shade for hover effect
  },

  // Media Queries for responsiveness
  '@media (max-width: 1200px)': {
    heading: {
      fontSize: '2.2em',
    },
    description: {
      fontSize: '1.1em',
    },
    regionItem: {
      fontSize: '1.3em',
    },
    mapContainer: {
      height: '250px', // Slightly reduced map size on medium screens
    },
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2em',
    },
    description: {
      fontSize: '1em',
    },
    regionList: {
      flexDirection: 'column', // Stack the region list items vertically
      alignItems: 'center', // Center align the items
      gap: '20px', // Reduce the gap between items on smaller screens
    },
    regionItem: {
      fontSize: '1.2em', // Smaller font size for mobile/tablets
    },
    mapContainer: {
      height: '200px', // Smaller map size for tablets
    },
    ctaButton: {
      padding: '12px 25px', // Slightly smaller button padding for mobile/tablets
      fontSize: '1em',
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.8em',
    },
    description: {
      fontSize: '0.95em',
    },
    regionItem: {
      fontSize: '1em', // Smaller font size for mobile
    },
    mapContainer: {
      height: '180px', // Even smaller map size for mobile
    },
    ctaButton: {
      padding: '10px 20px', // Smallest padding for the button on mobile
      fontSize: '0.9em',
    },
  },
};

const RegionalPresence = () => {
  return (
    <section id="findus" style={styles.section}>
      <h1 style={styles.heading}>Regional Presence</h1>
      <p style={styles.description}>
        AIFBF operates regional offices in the following states:
      </p>

      {/* State List */}
      <ul style={styles.regionList}>
        <li style={styles.regionItem}>• Bengaluru</li>
        <li style={styles.regionItem}>• Tamil Nadu</li>
        <li style={styles.regionItem}>• Andhra Pradesh</li>
        <li style={styles.regionItem}>• Telangana</li>
        <li style={styles.regionItem}>• Delhi</li>
      </ul>

      {/* Map Section */}
      <div style={styles.mapContainer}>
        {/* Embed Google Map for the provided location with reduced size */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12055.56157615673!2d77.63411732231777!3d12.890507779271518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae105b7fd18a83%3A0x1f52c7e9d2d5ee!2sSY%20NO.%2038%2F1%2C%20ANDAPURA%20VILLAGE%2C%20ATTIBELE%20HOBLI%2C%20ANEKAL%20TALUK%2C%20ELECTRONIC%20CITY%20POST%2C%20Bengaluru%20%28Bangalore%29%20Urban%2C%20Karnataka%2C%20560100!5e0!3m2!1sen!2sin!4v1671251108061!5m2!1sen!2sin"
          width="80%" // Reduced width to make the map smaller
          height="300" // Reduced height to make the map smaller
          style={{ border: 'none' }}
          title="Bengaluru Map"
        ></iframe>
      </div>

      {/* CTA Button */}
      <a href="#contact" style={styles.ctaButton}>
        Find Us Near You
      </a>
    </section>
  );
};

export default RegionalPresence;
