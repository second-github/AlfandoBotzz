/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '087b253e44',
}

// Other
global.owner = ['6285764175824','6282181552813']
global.premium = ['6282181552813']
global.namaowner = ['AlfandoMD️']
global.namabot = ['```ShizukaBot-MD```']
global.packname = 'Shizuka(╥﹏╥) \n\n\n\n\nFollow My Instagram\n@Alfando_3398\n\n\n'
global.author = 'M\nO\nO\nN\nA\n\n\n\n\n\n\n\n\n\n𝙆\n𝘼\n𝙒 \n𝘼 \n𝙄\n𝙄'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','/']
global.sp = '⭔'
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗸𝗮𝗸',
    admin: 'khusus Admin Group!',
    botAdmin: 'Hmm, sepertinya bot bukan admin deh... Coba lagi kalau bot sudah menajdi admin😁',
    owner: '𝗙𝗜𝗧𝗨𝗥 𝗞𝗛𝗨𝗦𝗨𝗦 𝗢𝗪𝗡𝗘𝗥 𝗕𝗢𝗧!',
    group: '𝙁𝙞𝙩𝙪𝙧 𝙃𝙖𝙣𝙮𝙖 𝘿𝙖𝙥𝙖𝙩 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥!!!',
    private: '𝙏𝙞𝙙𝙖𝙠 𝘿𝙖𝙥𝙖𝙩 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙛𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙙𝙞𝙙𝙖𝙡𝙖𝙢 𝙂𝙧𝙤𝙪𝙥!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿, 𝘒𝘢𝘭𝘢𝘶 𝘉𝘰𝘵 𝘵𝘪𝘥𝘢𝘬 𝘔𝘦𝘳𝘴𝘱𝘰𝘯, 𝘢𝘳𝘵𝘪𝘯𝘺𝘢 𝘍𝘪𝘵𝘶𝘳 𝘴𝘦𝘥𝘢𝘯𝘨 𝘦𝘳𝘳𝘰𝘳!!! ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./1.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
