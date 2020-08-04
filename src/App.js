import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    let bookItems = await axios.get("http://skunkworks.ignitesol.com:8000/books")
    console.log(bookItems.data);
    this.setState({isLoaded : true,
                  items: bookItems.data.results})
  }

  render() {
    const { items } = this.state;
      return (
        <div>
          <ul>
            {console.log('hi',items)}
      {items.map( (item, i) => <li key={i}>{item.authors.map((item2, j) => <li key={j}>{item2.name}</li>)}</li>)
         }
         </ul>
      </div>
      )
    }
}

export default App;
