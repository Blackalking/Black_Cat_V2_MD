import fs from 'fs';
import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {

try {
const fileId = '15gGTm92kBBUk3TFT1M_0dKFdJW0ip2Db';

const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
        
const res = await axios.get(url);

if (res.data && Array.isArray(res.data)) {
            let rdata = res.data;
            let json = rdata[Math.floor(Math.random() * rdata.length)];
            
            let boy = json.boy;
            let girl = json.girl;
             

            
            conn.sendMessage(m.chat, { image: { url: boy }, caption: 'شبيك لبيك صورة الولد بين ايديك 🧞'}, { quoted: m });
           
            conn.sendMessage(m.chat, { image: { url: girl }, caption: 'شبيك لبيك صورة البنت بين ايديك 🧞' }, { quoted: m });
                

        } else {
            console.error('The received data is not a valid JSON array.');
        }
    } catch (error) {
        console.error('Error fetching data from Google Drive:', error);
    }




};
handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(ماتشينج|تطقيم|كابلز)$/i;

export default handler;
