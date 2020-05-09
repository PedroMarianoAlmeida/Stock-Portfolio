class Portfolio extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="container">
          <h1 className="text-center my-4">Stock Portfolio</h1>
          <div className="row">
            <div className="col-12">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Shares Owned</th>
                    <th scope="col">Cost per share ($)</th>
                    <th scope="col">Market Price ($)</th>
                    <th scope="col">Market Value ($)</th>
                    <th scope="col">Unrealized Gain/Loss ($)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);