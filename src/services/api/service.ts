import useLocalStorage from '@/hooks/useLocalStorage';
import { IDeviceInfo } from '@/types/IDeviceInfo';
import axios from 'axios';


interface IToken {
    token: string | null;
}
export const getDeviceInfo = async (): Promise<IDeviceInfo[]> => {
    const {data} = useLocalStorage('token');
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/devices`,
        headers: { 
          'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVkYmNiZDljZDNiYWI4ZjNlNDRiZmEiLCJpYXQiOjE3MzQxOTkwNTQsImV4cCI6MTczNDI4NTQ1NH0.fsRhoiv4RiPzpjEOkV2vm7Chm5_B4W3cIZdX76geo5M"
        }
    };
      
    const response = await axios.request(config);
    return response.data;
};
