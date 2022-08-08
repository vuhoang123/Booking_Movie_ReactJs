const initialState = {
  seatList: [
    {
      hang: "",
      danhSachGhe: [
        { soGhe: "1", gia: 0 },
        { soGhe: "2", gia: 0 },
        { soGhe: "3", gia: 0 },
        { soGhe: "4", gia: 0 },
        { soGhe: "5", gia: 0 },
        { soGhe: "6", gia: 0 },
        { soGhe: "7", gia: 0 },
        { soGhe: "8", gia: 0 },
        { soGhe: "9", gia: 0 },
        { soGhe: "10", gia: 0 },
        { soGhe: "11", gia: 0 },
        { soGhe: "12", gia: 0 },
      ],
    },
    {
      hang: "A",
      danhSachGhe: [
        { soGhe: "A1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "A11", gia: 0, daDat: false, dangChon: false },
        { soGhe: "A12", gia: 0, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "B",
      danhSachGhe: [
        { soGhe: "B1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "B12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "C",
      danhSachGhe: [
        { soGhe: "C1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "C12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "D",
      danhSachGhe: [
        { soGhe: "D1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "D12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "E",
      danhSachGhe: [
        { soGhe: "E1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "E12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "F",
      danhSachGhe: [
        { soGhe: "F1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "F12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "G",
      danhSachGhe: [
        { soGhe: "G1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "G12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "H",
      danhSachGhe: [
        { soGhe: "H1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "H12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "I",
      danhSachGhe: [
        { soGhe: "I1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "I12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
    {
      hang: "J",
      danhSachGhe: [
        { soGhe: "J1", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J2", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J3", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J4", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J5", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J6", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J7", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J8", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J9", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J10", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J11", gia: 75000, daDat: false, dangChon: false },
        { soGhe: "J12", gia: 75000, daDat: false, dangChon: false },
      ],
    },
  ],
};

// shallow comparison : so sánh nông
const reducer = function(currentState = initialState, action) {
  switch (action.type) {
    case "UPDATE_SEAT":
      const cloneSeatList = [...currentState.seatList];
      cloneSeatList.map((item) => {
        item.danhSachGhe.map((dataSeat) =>
          dataSeat.soGhe === action.payload.seat
            ? (dataSeat.dangChon = !dataSeat.dangChon)
            : item
        );
      });
      return { ...currentState, seatList: cloneSeatList };
    // if (findSeat) {
    //   findSeat.danhSachGhe.soGhe = action.payload.seat.value;
    //   console.log(findSeat.danhSachGhe.soGhe);
    // }
    case "DELETE_SEAT":
      const cloneSeatDelte = [...currentState.seatList];
      cloneSeatDelte.map((item) => {
        item.danhSachGhe.map((dataSeat) =>
          dataSeat.soGhe === action.payload.delSeat
            ? (dataSeat.dangChon = false)
            : item
        );
      });
      return { ...currentState, seatList: cloneSeatDelte };
    case "CONFIRM_SEAT":
      const cloneSeatConFirm = [...currentState.seatList];
      cloneSeatConFirm.map((item) => {
        item.danhSachGhe.map((dataSeat) => {
          action.payload.ChoosenList.map((seatId) =>
            dataSeat.soGhe === seatId ? (dataSeat.daDat = true) : item
          );
        });
      });
      alert("Thanh toán thành công")
      return { ...currentState, seatList: cloneSeatConFirm };

    default:
      return currentState;
  }
};

export default reducer;
