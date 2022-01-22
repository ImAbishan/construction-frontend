import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Summary = (props)  => {
  const [state, setState] = useState({ name: '', salaryanswer: '', age: '', expensesanswer: '', rate: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, salaryanswer, age , expensesanswer, rate} = steps;
    setState({ name, salaryanswer, age ,expensesanswer, rate});
  }, [props])

    const { name, salaryanswer, age, expensesanswer, rate } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
                <td>Name : </td>
                <td>{name.value}</td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>{age.value}</td>
            </tr>
            <tr>
                <td>Monthly Salary  : </td>
                <td>{salaryanswer.value}</td>
            </tr>

            <tr>
                <td>Monthly expense  : </td>
                <td>{expensesanswer.value}</td>
            </tr>
            <tr>
                <td>Annual Income  : </td>
                <td>{salaryanswer.value*12}</td>
            </tr>

            <tr>
                <td>Annual Expense  : </td>
                <td>{expensesanswer.value*12}</td>
            </tr>
            <tr>
                <td>Annual savings  : </td>
                <td>{(salaryanswer.value*12) - (expensesanswer.value*12) }</td>
            </tr>
            <tr>
                <td>Inc - Rate : </td>
                <td>{rate.value }%</td>
            </tr>

          </tbody>
        </table>
      </div>
    );
}

Summary.propTypes = {
  steps: PropTypes.object,
};

Summary.defaultProps = {
  steps: undefined,
};

export default Summary;