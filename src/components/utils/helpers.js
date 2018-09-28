import { lifecycle } from 'recompose';

const setToLocalStorageOnPropsUpdate = ({ propName, itemName }) =>
  lifecycle({
    componentDidUpdate() {
      const prop = this.props[propName];

      if (prop) {
        localStorage.setItem(itemName, JSON.stringify(prop));
      }
    }
  });

export default { setToLocalStorageOnPropsUpdate };
