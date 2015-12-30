import React, { Component, PropTypes } from 'react'

const _styles = (theme) => {
  return {
    input: {
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      fontSize: '20px',
      padding: '16px 15px 16px 0',
      width: '100%',
      color: theme.colors.accent
    }
  }
}

export default class CalculationInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    input: PropTypes.string,
    theme: PropTypes.object
  }

  render() {
    const { input, onKeyDown, onKeyPress, onSubmit, theme } = this.props
    const styles = _styles(theme)

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="calculator"
          value={input}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onChange={() => { /* silence React warning */ }}
          placeholder="Enter an expression to calculate"
          style={styles.input}
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    )
  }
}
