import AnimalStore from './stores/AnimalStore';
import AnimalActions from './actions/AnimalActions';

export default class ListComponent extends React.Component {

  state = {
    value: null
  }

  componentDidMount() {
    AnimalActions.fetchAnimals();
  }

  handleClick() {
    AnimalActions.addAnimal(this.state.value);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    var list = AnimalStore.getList()
    return (
      <div>
        <ul>
          {list.map(e => <li>{e}</li>)}
        </ul>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.value} />
        <button onClick={this.handleClick.bind(this)}>Add {this.state.value}</button>
      </div>
    )
  }
}
