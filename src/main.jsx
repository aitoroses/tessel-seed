import atom from 'appstate';

import ListComponent from './ListComponent';

import AnimalStore from './stores/AnimalStore';


class AppHandler extends atom.Component {
  render() {

    var lastAdded = AnimalStore.getLastAdded();

    var name;
    if (lastAdded) {
      name = <div>Hello {lastAdded}</div>;
    } else {
      name = <div>No lastAdded.</div>
    }

    return (
      <div>
        {name}
        <ListComponent />
      </div>
    )
  }
}

React.render(<AppHandler/>, document.getElementById('app'))
