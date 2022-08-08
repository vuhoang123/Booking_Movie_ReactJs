import React, { Component } from "react";
import "./seat.css";
import { connect } from "react-redux";

export class Seat extends Component {
  handleChange = (e) => {
    const choosenSeat = {
      seat: e.target.id,
    };

    this.props.dispatch({ type: "UPDATE_SEAT", payload: choosenSeat });
  };

  render() {
    return (
      <div>
        <table className="seatsBlock">
          <tbody>
            <tr className="rowNumber">
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            {this.props.seatList.map((item) => {
              if (item.hang !== "") {
                return (
                  <tr>
                    <td>{item.hang}</td>
                    {item.danhSachGhe.map((item1) => {
                      if (item1.dangChon) {
                        if (item1.daDat) {
                          return (
                            <td>
                              <button
                                className="seats gheDuocChon"
                                id={item1.soGhe}
                                onClick={this.handleChange}
                                disabled
                              ></button>
                            </td>
                          );
                        } else {
                          return (
                            <td>
                              <button
                                className="seats gheDangChon"
                                id={item1.soGhe}
                                onClick={this.handleChange}
                              ></button>
                            </td>
                          );
                        }
                      } else {
                        return (
                          <td>
                            <button
                              className="seats "
                              id={item1.soGhe}
                              onClick={this.handleChange}
                            ></button>
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // propName: state
    seatList: state.List.seatList,
  };
};
export default connect(mapStateToProps)(Seat);
