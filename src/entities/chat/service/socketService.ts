import { io, Socket } from "socket.io-client";

import { accessToken } from "@/shared/tokens";
import { SOCKET_EVENT, SOCKET_SERVER_URL } from "@/shared/socket_event_names";
import { mappers_dictionary } from "./mapper";

let socket: Socket;
// 소켓 초기화
export function connect() {
  socket = io(SOCKET_SERVER_URL, {
    transports: ["websocket"],
    auth: {
      accessToken,
    },
  });

  // 서버에 클라이언트 등록
  const register = (id: string) => {
    socket.emit(SOCKET_EVENT.EMIT_REGISTER, { userId: id });
  };

  const success = (callback: () => void) => {
    socket.on("connect", callback);
  };

  return { register, success };
}

export function disconnect() {
  socket?.disconnect();
}

type Callback = (data: any) => void;

// 동적 이벤트 리스너 등록
export const subscribe_on = (event: string, callback: Callback) =>
  socket.on(event, (data: any) => {
    const mapper = mappers_dictionary.get(event);
    callback(mapper?.(data) ?? data);
  });

// 동적 이벤트 이미터 등록
export const emit_event = (event: string, data: any) => {
  const mapper = mappers_dictionary.get(event);
  socket.emit(event, mapper?.(data) ?? data);
};

// 다대다 채팅방 생성
export const make_room = (host_id: string, selected_users: string[]) =>
  emit_event(SOCKET_EVENT.EMIT_CREATE_ROOM, { host_id, selected_users });

// 일대일 채팅방 퇴장
export const leave_room = (user_id: string, room_id: string) =>
  emit_event(SOCKET_EVENT.EMIT_LEAVE_ROOM, { user_id, room_id });
