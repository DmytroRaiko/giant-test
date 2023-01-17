import { trackabiAPI } from "../../api";

export const login = async (body) => await trackabiAPI.post('/user/login?realUtcOffset=120&timezone=Europe%2FKiev', body);
