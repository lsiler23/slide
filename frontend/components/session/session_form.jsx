import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from './nav_bar_container';

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
    const otherType = (type === 'Log in' ? '/signup' : '/login');
    const linkText = (type === 'Log in' ? 'sign up' : 'log in');
    const errors = (this.props.errors.length > 0 ? this.props.errors : null);

    return (
      <div className='auth-page'>
        <NavBarContainer />
        <div className='auth-form-box'>
          <h3 className='auth-form-title'>{type}</h3>
            <form
              onSubmit={this.handleSubmit}
              className='auth-form'>
              <div className='auth-section'>
                <input
                  onChange={this.handleChange('email_address')}
                  type="text"
                  value={this.state.email_address}
                  placeholder='you@example.com' />
              </div>
              <div className='auth-section'>
                <input
                  onChange={this.handleChange('username')}
                  type='text'
                  value={this.state.username}
                  placeholder='username'/>
              </div>
              <div className='auth-section'>
                <input
                  onChange={this.handleChange('password')}
                  type="password"
                  value={this.state.password}
                  placeholder='password'/>
              </div>
              <button className='auth-button'>{type}</button>
            </form>
            <div className='auth-redirect'>
              <span>Need to <Link to={otherType}>{linkText}</Link> instead?</span>
            </div>
        </div>
        <ul>
          {
            errors && errors.map((err, id) => {
              return <li key={id}>{err}</li>;
              })
            }
          </ul>
      </div>
    );
  }
}

export default withRouter(SessionForm);
