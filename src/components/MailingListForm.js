import React, { Component } from 'react';
import { Field } from 'redux-form';

class MailingListForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Are You Over 21?</label>
          <div>
            <label><Field name="age" component="input" type="radio" value="over21"/> Yes, I am older 21.</label>
            <label><Field name="age" component="input" type="radio" value="under21"/> No, I am youger than 21.</label>
          </div>
        </div> {/* End Age Div */}
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div> {/* End First Name Div */}
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div> {/* End Last Name Div */}
        <div>
          <label>Where can we send you updates?</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div> {/* End Email Div */}
        <div>
          <label>What country are you from?</label>
          <div>
            <Field name="country" component="select">
              <option></option>
              <option value="ff0000">Country 1</option>
              <option value="00ff00">Country 2</option>
              <option value="0000ff">Country 3</option>
            </Field>
          </div>
        </div> {/* End Country Div */}
        <div>
          <label>What state are you from?</label>
          <div>
            <Field name="state" component="select">
              <option></option>
              <option value="ff0000">State 1</option>
              <option value="00ff00">State 2</option>
              <option value="0000ff">State 3</option>
            </Field>
          </div>
        </div> {/* End State Div */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default MailingListForm;
