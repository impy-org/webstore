import React from 'react';
import classnames from 'classnames';

/* istanbul ignore next */
import './button.less';

export default class Button extends React.Component {
  render() {
    const {
      className,
      children,
      ...props
    } = this.props;

    const cn = classnames('button', className);

    return (
      <button className={cn} {...props}>
        {children}
      </button>
    );
  }
}
