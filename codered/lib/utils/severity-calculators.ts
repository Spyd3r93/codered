export const calculateSeverity = (impact, urgency) => {
  if (impact === 'High' && urgency === 'High') {
    return 'Critical';
  } else if (impact === 'Medium' && urgency === 'High') {
    return 'High';
  } else if (impact === 'Low' && urgency === 'High') {
    return 'Medium';
  } else if (impact === 'High' && urgency === 'Medium') {
    return 'High';
  } else if (impact === 'Medium' && urgency === 'Medium') {
    return 'Medium';
  } else if (impact === 'Low' && urgency === 'Medium') {
    return 'Low';
  } else if (impact === 'High' && urgency === 'Low') {
    return 'Medium';
  } else if (impact === 'Medium' && urgency === 'Low') {
    return 'Low';
  } else if (impact === 'Low' && urgency === 'Low') {
    return 'Low';
  } else {
    return 'Unknown';
  }
};
