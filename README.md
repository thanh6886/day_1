# day_1
 
cách tạo 1 class Compoment 

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

props 

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);


state là nơi bạn lưu trữ nhưng thành phân 
khi State thay đổi thì Component thay đổi

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}