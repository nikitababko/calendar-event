import { EventAction, EventActionEnum, EventState } from './types';

const inintialState: EventState = {
  events: [],
  guests: [],
};

export default function EventReducer(
  state = inintialState,
  action: EventAction
): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };

    case EventActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
}
