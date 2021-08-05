import ReactGA from 'react-ga';

const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

export default Event