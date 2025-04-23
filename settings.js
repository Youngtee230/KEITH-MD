/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Vy27jRhb9lUFtKUd8SSQFGAhJS6QelEVSph5BFiWySJX5VLFEiWoYyCJBLxu9C5ABAsw3aJcv6PyF/yCfENCyYWMm6fEAw1Wh6vLcc+89deoDyHJcojGqQe8DKAiuIEXNktYFAj2g7cMQEdACAaQQ9MBCd9a139Hup7NIK8chmiSupgbtymLUAay2UQmHUUepteXqGjy0QLHfJNj/CiDh9DG/YZkVstqQ0UVlOV92nUM85CpHbzMWh4x6MxfIxG0AG0SICc6ifrFFKSIwGaN6BjF5H/2yz/urgQyJmHdnkovTYoqdrnlbraJoAeNK7yZ8sZ4xbjZ8H/0C7+jqtEuW3WJ2GC5XxWEfsoc82toFIzD5Pin06Uiw2rIgXuiXOMpQMAxQRjGt3933SDXcgyAy9m3f8scp3unL/h0T2WnAQL+yAxyqa2Mph4fl4X3ErUmZuoYw1IrThEzd7e1UWPPLgbphOvFuVal3NZ5wk5GiePlb4jPyopX4f+n7eCQ74c7Vw9OEqGLuSEMGBl6eTxKHRKkm7Y+TU43vM5O9ex99TxrCcQzd0NHirS97cK+lwokY7LCcJVpVRbsMK4PscN+PXulDuidfY3k45geddVxnauS15IejOzH1JWz4JvKWqD/Uhyw0ZFeXZOV2kqwOfrBm5pW82dLi6A8HyFSXB36Ot0zX8fcjFvdZc64frp8qilE9DECPe2gBgiJcUgIpzrNmj+fkFoBB5SKfIPrUXhBlOyHOVHvjFIxDTOtOQdQqFOQnBoJCey2Nbg6By0wEZXUNWqAguY/KEgUmLmlOaguVJYxQCXrfPU2qKZqgNKdohAPQA7wkcVJHkhWR/bb85rCFtIRF8U2GKGiBkOSphUCPkj1qgaf4vtgRRIWXuizPKVpH4TllIGhclxvc8DyvDpoK00vOOU5RSWFagB4niR2R5zhOemj9X2ioCt/nWZYbsF1ZFFSuL/cVXu70FfnmRhQ0+es0eOHh+xbI0JFeVNz0XuBaIMSkpHfZvkhyGLxI/OUQ+n6+z6hbZ77eLBABvTfbiFKcRWVT2D6DxN/iCulNHaAXwqREDy0QoAr7qMEDnFKZ6GgbblS7V8XSW1/xp07UzG+bZ5cQllcC5PvsFbcJhCtR4rirjd/xr7qh7yMkdMVA5kDTjouBNP/8rZ6DXRxs+sLJMgsvDOd7aVlxdJC2F87F3S5CRAQFL13eQD/eF/M8RtlXcDXsolO2zj1uMBlX66mj25NYLSSo2G9wLwIHvQ+vpq3nQYM3kNa25ikmaKbV5Pl3MfS63f/UQwabYPD7p8fzp8fzP7+cv/zrH4/nXx7PHx/PH//49fPn7x7PH7+cH88//v5DE/Tzy+FP3//x6+ffGmLPU2tSBohCnJSgB/SRu8i7/k1/fGsUlmoYaj9S9UgFr1N+8Y7L3TSO2/b9TjSmt7Ot1JGQUxdU16h5h6rFxK0GM5uxhCQeL+z8+i9AQA+kwqY87oR85AnTjRIpdSG5HlnIumSyBn8rWSuhcof4JFvZYuw5bRoSKDFZp8hsp63WCZrcdj2y8Oa2WS7ni/Z+IG91+7rJdlHb22ROO2aF0SFGgmJ5o0r1lslxZY35tuHIynil296oT328NpV6NJrLwXq8i9qOQbcbLM/VQDXDk2oWehTMgzjaLBJ5xqxV++JqT66aPL9m+NlvLtoMMXp6HJ7H9t+m+3pL2IfWG4jn1+bvlOiUq1Ds7rX7+b2IGCTE/m5jRxuHMwmHWXKcs7P7aWetJ/EYPDTXv0ggDXOSgh6AWUByHIAWSGBJ1deL/hfewYotkNZqUbgU0hd/AGrzTQgLHv4Ewx7DNUgJAAA=';

const prefix = process.env.PREFIX || '!';
const mycode = process.env.CODE ||"27";
const author = process.env.OWNER_NAME || 'YOUNG TEE';
const packname = process.env.PACKNAME || 'YOUNG TEE';
const dev = process.env.OWNER_NUMBER || '27717578949';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'YOUNGT-XMD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/izd8l0.jpeg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9p514JkK797wMg5y2N';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'YOUNG TEE declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
