import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from './nav_bar';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/chatrooms'));
  }

  handleChange(field) {
    return (e) => {

      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    const type = this.props.formType;
    const { history } = this.props;
    const otherType = (type === 'login' ? '/signup' : '/login');
    const linkText = (type === 'login' ? 'signup' : 'login');
    const errors = (this.props.errors.length > 0 ? this.props.errors : null);

    return (
      <div>
        <NavBar history={ history } />
        <h3>{type}</h3>
        {
          errors && errors.map((err, id) => {
            return <li key={id}>{err}</li>;
          })
        }
        <form onSubmit={this.handleSubmit}>
          Email:
          <input
            onChange={this.handleChange('email_address')}
            type="text"
            value={this.state.email_address}/>
          Username:
          <input
            onChange={this.handleChange('username')}
            type='text'
            value={this.state.username}/>
          Password
          <input
          onChange={this.handleChange('password')}
          type="password"
          value={this.state.password}/>
        <button>{type} </button>
        </form>
        <Link to={otherType}>{linkText}</Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
