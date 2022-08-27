import { Component } from "react";
import "./ListItems.css";

class ListItems extends Component {
  render() {
    return (
      <>
        {this.props.items.map(({ text, key }) => {
          return (
            <div className="list" key={key}>
              <p>{text}</p>
              <button onClick={() => this.props.deleteItem(key)}>delete</button>
            </div>
          );
        })}
      </>
    );
  }
}
export default ListItems;
