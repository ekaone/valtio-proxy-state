import { proxy } from "valtio";

export const state = proxy({
  count: 0,
  text: "hello",
  randomNumber: Math.random(),
  useIncrement: function () {
    ++this.count;
  },
  useDecrement: function () {
    --this.count;
  },
  seats: [
    { id: "A1", number: "A1", occupied: true },
    { id: "A2", number: "A2", occupied: true },
    { id: "A3", number: "A3", occupied: false },
    { id: "A4", number: "A4", occupied: false },
    { id: "A5", number: "A5", occupied: true },
    { id: "A6", number: "A6", occupied: true },
    { id: "A7", number: "A7", occupied: false },
  ],
  selected: [],
  useSelected: function (id) {
    const order = this.seats.find((seat) => seat.id === id);
    state.selected.push({ ...order });
    console.log(state.selected);
  },
});
