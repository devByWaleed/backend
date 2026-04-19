import axios from 'axios';
import { ApiResponse, User } from './types';

const API_URL = 'http://localhost:4000/api/user';

export const getUsers = async (): Promise<ApiResponse> => {
    const response = await axios.get<ApiResponse>(`${API_URL}/get-user`);
    return response.data;
};

export const createUser = async (userData: User): Promise<ApiResponse> => {
    const response = await axios.post<ApiResponse>(`${API_URL}/create-user`, userData);
    return response.data;
};

export const updateUser = async (userData: User): Promise<ApiResponse> => {
    const response = await axios.put<ApiResponse>(`${API_URL}/update-user`, userData);
    return response.data;
};

// export const deleteUser = async (userData: User): Promise<ApiResponse> => {
//     const response = await axios.delete<ApiResponse>(`${API_URL}/delete-user`, userData);
//     return response.data;
// };