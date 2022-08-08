import React, { Component } from "react";
import Seat from "./Seat";
import bgImage from "../img/bgmovie.jpg";
import { connect } from "react-redux";
import "./Home.css";
import Booking from "./Booking";
export class Home extends Component {
  handleClickButtonGetSeat = () => {
    let seatChoosenList = [];
    [...document.querySelectorAll("#seatId")].map((i) =>
      seatChoosenList.push(i.innerHTML)
    );

    const choosenSeat = {
      ChoosenList: seatChoosenList,
    };

    this.props.dispatch({ type: "CONFIRM_SEAT", payload: choosenSeat });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
        <div className="bookingMovie">
          <div className="left_content">
            <div className="screen">
              <h3>Màn hình</h3>
            </div>
            <Seat />
          </div>
          <div className="right_content">
            <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
            <div>
              <div>
                <button className="seats"></button>
                <span>Ghế trống</span>
              </div>
              <div>
                <button className="seats gheDuocChon"></button>
                <span>Ghế đã đặt</span>
              </div>
              <div>
                <button className="seats gheDangChon"></button>
                <span>Ghế đang chọn</span>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Hủy</th>
                </tr>
              </thead>

              <Booking />
            </table>
            <button
              onClick={this.handleClickButtonGetSeat}
              className="btn btn-success"
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
