import * as React from 'react';
import './Hello.css';
import {QueryObject, FetchArticles} from "../actions/index";
import construct = Reflect.construct;

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  fetchArticles: (query: QueryObject) => FetchArticles;
}

export default class Hello extends React.Component<Props, object> {
  constructor (props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchArticles(this.props.params.user);
  }

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}


// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
