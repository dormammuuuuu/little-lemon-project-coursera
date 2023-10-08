const availableTimesByDate = {
  '2023-09-29': ['10:00', '11:00', '12:00'],
  '2023-10-01': ['10:00', '11:00', '12:00'],
  '2023-10-02': ['10:00', '11:00', '12:00'],
  '2023-10-03': ['10:00', '11:00', '12:00'],
  '2023-10-04': ['10:00', '11:00', '12:00'],
  '2023-10-05': ['10:00', '11:00', '12:00'],
  '2023-10-06': ['10:00', '11:00', '12:00'],
  '2023-10-07': ['10:00', '11:00', '12:00'],
  '2023-10-08': ['10:00', '11:00', '12:00'],
  '2023-10-09': ['10:00', '11:00', '12:00'],
  '2023-10-10': ['10:00', '11:00', '12:00'],
  '2023-10-11': ['10:00', '11:00', '12:00'],
  '2023-10-12': ['10:00', '11:00', '12:00'],
  '2023-10-13': ['10:00', '11:00', '12:00'],
  '2023-10-14': ['10:00', '11:00', '12:00'],
  '2023-10-15': ['10:00', '11:00', '12:00'],
  '2023-10-16': ['10:00', '11:00', '12:00'],
  '2023-10-17': ['10:00', '11:00', '12:00'],
  '2023-10-18': ['10:00', '11:00', '12:00'],
  '2023-10-19': ['10:00', '11:00', '12:00'],
  '2023-10-20': ['10:00', '11:00', '12:00'],
};


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date])
      }
      else {
        reject(new Error('No available times for the selected date.'));
      }
    }, 1000)
  })
}

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI }