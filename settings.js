/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V226jSBD9lVW/2rPhfrEUacFgAgZ8Aew4q31oQ2Nj7k3bBkb+9xVxokSa2dmstDy1mu5Tp6pOnf4OijJp0Bx1YPIdVDi5QIKGJekqBCZAPccxwmAMIkggmIDOMCPadtxVYENpyuj+QrTjfrXrrzlXipShBz0RFjGebpxHcBuD6rzPkvAXgFb8rEmxpjipfla25RX5V58tfE059u7eqIgSJUejRi8i0zyC24AIE5wUB706ohxhmM1Rt4QJ/hr9xWxpJ4d9k/BZcjESNOKKxDltipdgt/OOyye1UirPPV+e6N3X6JP8eJrZMx1bJjV/vpihNvKqDY89BsNpp20dXy781nbjk36n3ySHAkVmhAqSkO7LdV/MahhgezRfm1vKoyy9ynYPZLEyfOO6PRHG2I2kE9mu9M0XiXeeGrVFU3e2yefxVfIl2W/b7RYHtWXVVxZSHbtVWdlfN5+JL/G7VtL/UvfOtg7rsE0hY6ZOWz8tTM3OtkXupFqgvXiw7J2EKNn8mF6/Rn9tGS6km+XM7rRFqZ+q+kihmplvDupur7nNBkXPbYYtTAcf9CE541+xpOja8oM8XZaMO19E6tHTLEGWsR2dtGqdtljDlZou4hKJ67guOGH34rSi61acLBYuazVWsYrUfX3dT+smwDiK9U5VHl8zSlFnRmBC38YAo0PSEAxJUhbDniSNAYwuHgoxIq/VBfjoMsGUjeh6OyqEl1NQp3GfS/1aX8JeoTWyvOrPUcH0YvoIxqDCZYiaBkVPSUNK3DmoaeABNWDy52ujhpwxykuCrCQCEyAzLMvyAi1QjPRH8/v1CEkDq+r3AhEwBjEucweBCcFnNAavFxiGUzhVm9GMoEkKJ7MSJQpTStFFhWMYXh4yzO9B/SRHDYF5BSa0yPEcw/K8eBv/PzxYiuNElRamksrxOsfI9FQQFY5SOVVQFeZfeAjc7a8xKFBL7jIeis/SYxAnuCFBca6yEkbvGn//CcOwPBfE64pwOiwQBpNP24iQpDg0Q2bnAuLwmFzQdMgDTGKYNeg2BhG6JCEa8EBToziSjcg3c/X6VPvKFJ7569DBY1ncj9AcvecYbv8NMrH0jeNj5huMxfAbw4cCJfMcJTEQDOW4O8hw5x8FHS3588XuqzyyQ8pzfK5c9fEWng3SvIryrkSEUfRe5T0M03PllykqfoErxM99lvUSY/Amy7bMqX3uzcUVF3vzE+5d4WDy/cO1p2U04NmszsszmgFDt4Y4P6hhIv6ohwIOh4Gyj87Zb2t0zGExBHvrxAATIQKTrAETMF3a884KZ/rce6kcxTAU86BMDwr46Ny7Idwnztyl61VDTr58XRROqSWsHl3KzdqxvI3psNuqnCYn/cFrNtzjT0DABHAL18rMlbHytXXzIC2gkgls4WeL+IE1lN3DUpcjJPaZ3ZlP+krTfWGTF4fVgcdpO7LFml1pnVBcn6iRd6V7SsyzJdIG93hX0OdgLCUrgZTP3KIO7XXatNXqMN8762A3iyK3np+t7XLLyhc+37xw3FHvdrbqySt1FaB547e7zl0+0yNyKkenSwvNuauOlsrhblWvVpm9PVHJm4vc9RYn6NXx31rxbx37UD51G3+CeHtC/kFdqmdYemDbO+oh1Kp+rnCkfdoLs8CfBpmnuXQNlbJslxSeIXAbRrrKIIlLnA8Tlu+H8chgQ5SPyf2JGbDyGOSdUlUegeR94IEyfDPPBre/Ae1tdm4aCQAA'
const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE ||"+92";
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
