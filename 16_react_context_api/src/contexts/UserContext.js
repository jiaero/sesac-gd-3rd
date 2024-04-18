// 기본 값으로 name, setName을 가지는 UserContext 만들기
import { createContext } from "react";

const defaultUser = {
    name: 'layla',
    setName: () => {},
};

export const UserContext = createContext(defaultUser);


