import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { format, parse, isValid, isEqual } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import TimeDropDown from "../../../components/eachInputs/TimeDropDown";

class DateInput extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      invalid: false,
      changed: false,
      value: this.formatDate(props),
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = prevProps;

    if (!isEqual(value, this.props.value)) {
      this.setState({ value: this.formatDate(this.props) });
    }
  }

  formatDate({ value, dateDisplayFormat, dateOptions }) {
    if (value && isValid(value)) {
      return format(value, dateDisplayFormat, dateOptions);
    }
    return "";
  }

  update(value) {
    const { invalid, changed } = this.state;

    if (invalid || !changed || !value) {
      return;
    }

    const { onChange, dateDisplayFormat, dateOptions } = this.props;
    const parsed = parse(value, dateDisplayFormat, new Date(), dateOptions);

    if (isValid(parsed)) {
      this.setState({ changed: false }, () => onChange(parsed));
    } else {
      this.setState({ invalid: true });
    }
  }

  onKeyDown = (e) => {
    const { value } = this.state;

    if (e.key === "Enter") {
      this.update(value);
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value, changed: true, invalid: false });
  };

  onBlur = () => {
    const { value } = this.state;
    this.update(value);
  };

  render() {
    const { className, readOnly, placeholder, ariaLabel, disabled, onFocus } =
      this.props;
    const { value, invalid } = this.state;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          backgroundColor: "buttonface",
          borderRadius: "7px",
          maxWidth: "225px",
        }}
      >
        <span
          className={classnames("rdrDateInput", className)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingLeft: "5px",
            height: "100%",
          }}
        >
          <CalendarMonthIcon fontSize="medium" />
          <input
            style={{ color: "#000", fontSize: "14px" }}
            readOnly={readOnly}
            disabled={disabled}
            value={value.slice(0, -6) + "/" + value.slice(-2)}
            placeholder={placeholder}
            aria-label={ariaLabel}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={onFocus}
          />
          {invalid && <span className="rdrWarning">&#9888;</span>}
        </span>
        <TimeDropDown id={"in" + (new Date().getTime() % 1000000)} />
      </div>
    );
  }
}

DateInput.propTypes = {
  value: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  dateOptions: PropTypes.object,
  dateDisplayFormat: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: "MMM D, YYYY",
};

export default DateInput;
