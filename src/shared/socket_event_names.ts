export const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

export const SOCKET_EVENT = {
  ON_SYSTEM: import.meta.env.VITE_SOCKET_ON_SYSTEM,
  ON_MESSAGE: import.meta.env.VITE_SOCKET_ON_MESSAGE,
  ON_ROOM_CREATED: import.meta.env.VITE_SOCKET_ON_ROOM_CREATED,
  EMIT_REGISTER: import.meta.env.VITE_SOCKET_EMIT_REGISTER,
  EMIT_MESSAGE: import.meta.env.VITE_SOCKET_EMIT_MESSAGE,
  EMIT_CREATE_ROOM: import.meta.env.VITE_SOCKET_EMIT_CREATE_ROOM,
  EMIT_LEAVE_ROOM: import.meta.env.VITE_SOCKET_EMIT_LEAVE_ROOM,
};
