class SearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.options,
    };
  }

  searchList(event) {
    const results = this.props.filterMethod(
      this.props.options,
      event.target.value
    );
    this.setState({ results });
  }

  render() {
    return this.props.render({
      results: this.state.results,
      searchList: (event) => this.searchList(event),
    });
  }
}

const options = [
  "Inside Out",
  "John Wick",
  "Jurassic World",
  "The Lord of the Rings",
  "Pacific Rim",
  "Pirates of the Caribbean",
  "Planet of the Apes",
  "Saw",
  "Sicario",
  "Zombies",
];

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
    };
  }

  filterMethod(options, query) {
    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  }

  showDropdown() {
    this.setState({ dropdownVisible: true });
  }

  hideDropdown() {
    this.setState({ dropdownVisible: false });
  }

  render() {
    return (
      <SearchSelect
        options={options}
        filterMethod={this.filterMethod}
        render={({ results, searchList }) => (
          <div className="autocomplete">
            <input
              type="text"
              placeholder="Type to search list"
              onChange={searchList}
              onFocus={() => this.showDropdown()}
              onBlur={() => this.hideDropdown()}
            />
            {this.state.dropdownVisible && (
              <div className="autocomplete-dropdown">
                <ul className="autocomplete-search-results-list">
                  {results.map((result) => (
                    <li className="autocomplete-search-result" key={result}>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      />
    );
  }
}

// class TagListSearch extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   filterMethod(options, query) {
//     return options.filter((option) =>
//       option.toLowerCase().includes(query.toLowerCase())
//     );
//   }

//   render() {
//     return (
//       <SearchSelect
//         options={options}
//         filterMethod={this.filterMethod}
//         render={({ results, searchList }) => (
//           <div className="tag-list-search">
//             <input
//               type="text"
//               placeholder="Type to search list"
//               onChange={searchList}
//             />
//             <ul className="tag-list">
//               {results.map((result) => (
//                 <li className="tag" key={result}>
//                   {result}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       />
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="example">
          <h2>Autocomplete</h2>
          <Autocomplete />
        </div>
      </div>
    );
  }
}
