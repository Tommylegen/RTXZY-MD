let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Bot Ini Menggunakan Script :\n• https://linktr.ee/rajadev
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
