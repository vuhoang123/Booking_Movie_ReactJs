import React, { Component } from "react";
import { connect } from "react-redux";

export class Booking extends Component {
  handleClickButton = (e) => {
    const deleteSeat = {
      delSeat: e.target.id,
    };
    this.props.dispatch({ type: "DELETE_SEAT", payload: deleteSeat });
  };
  render() {
    var sum = 0;
    return (
      <tbody>
        {this.props.seatList.map((item) => {
          return item.danhSachGhe.map((dataSeat) => {
            if (dataSeat.dangChon === true && dataSeat.daDat === false) {
              sum += dataSeat.gia;
              return (
                <tr>
                  <td id="seatId" scope="row">
                    {dataSeat.soGhe}
                  </td>
                  <td scope="row">{dataSeat.gia}</td>
                  <td scope="row">
                    <button
                      className="btn btn-danger"
                      id={dataSeat.soGhe}
                      onClick={this.handleClickButton}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            }
          });
        })}
        <tr>
          <td scope="row">TỔNG TIỀN</td>
          <td>{sum}</td>
        </tr>
      </tbody>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // propName: state
    seatList: state.List.seatList,
  };
};
export default connect(mapStateToProps)(Booking);
